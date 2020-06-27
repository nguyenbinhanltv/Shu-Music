import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
  styleUrls: ['./login-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginDialogComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    public authService: AuthService,
    private afAuth: AngularFireAuth,
    private dialogRef: NbDialogRef<LoginDialogComponent>,
    private toastrService: NbToastrService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.minLength(6))
    });
  }

  showToast(status: NbComponentStatus, position, messages) {
    this.toastrService.show(status, messages, { status, duration: 1000, position });
  }

  async loginWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    const credetial = await this.afAuth.auth.signInWithPopup(provider);
    return this.authService.updateUserData(credetial.user)
    .then(() => {
      this.showToast('success', 'top-right', 'Đăng nhập thành công.');
      this.dialogRef.close();
    })
    .catch(err => {
      this.showToast('danger', 'top-right', 'Lỗi đăng nhập');
    });
  }

  async loginWithEmailAndPassword(userFormValue) {
    const credetial = await this.afAuth.auth.signInWithEmailAndPassword(userFormValue.email, userFormValue.password);
    return this.authService.updateUserData(credetial.user)
    .then(() => {
      this.showToast('success', 'top-right', 'Đăng nhập thành công.');
      this.dialogRef.close();
    })
    .catch(err => {
      this.showToast('danger', 'top-right', 'Lỗi đăng nhập');
    });
  }

  async createWithEmailAndPassword(userFormValue) {
    const credetial = await this.afAuth.auth.createUserWithEmailAndPassword(userFormValue.email, userFormValue.password);
    return this.authService.updateUserData(credetial.user)
    .then(() => {
      this.showToast('success', 'top-right', 'Đăng ký thành công.');
      this.dialogRef.close();
    })
    .catch((err) => {
      this.showToast('danger', 'top-right', 'Lỗi đăng ký không thành công.');
    });
  }

  signOut() {
    this.authService.logOut();
    location.reload();
    this.dialogRef.close();
  }

  onSubmit(value) {
    this.loginWithEmailAndPassword(value);
  }

}
