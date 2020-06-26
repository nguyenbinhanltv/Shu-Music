import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NbDialogRef, NbToastrService, NbComponentStatus } from '@nebular/theme';
import { auth } from 'firebase/app';
import { AuthService } from 'src/app/services/auth.service';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';

@Component({
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  email: FormControl;
  password: FormControl;

  constructor(
    public authService: AuthService,
    private afAuth: AngularFireAuth,
    private dialogRef: NbDialogRef<LoginDialogComponent>,
    private toastrService: NbToastrService
  ) { }

  ngOnInit() {
    this.email = new FormControl('', Validators.email);
    this.password = new FormControl('', Validators.minLength(6));
  }

  showToast(status: NbComponentStatus, position) {
    this.toastrService.show(status, 'Login successfully', { status, duration: 1000, position });
  }

  async loginWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    const credetial = await this.afAuth.auth.signInWithPopup(provider);
    return this.authService.updateUserData(credetial.user)
    .then(() => {
      this.showToast('success', 'top-right');
      this.dialogRef.close();
    })
    .catch(err => console.log(err));
  }

  async loginWithEmailAndPassword() {
    const credetial = await this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password);
    return this.authService.updateUserData(credetial.user)
    .then(() => {
      this.showToast('success', 'top-right');
      this.dialogRef.close();
    })
    .catch(err => console.log(err));
  }

  signOut() {
    this.authService.logOut();
    location.reload();
    this.dialogRef.close();
  }

}
