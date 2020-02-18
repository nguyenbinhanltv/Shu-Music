import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { auth } from 'firebase/app';
import { AuthService } from 'src/app/services/auth.service';
import { resolve } from 'url';

@Component({
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private afAuth: AngularFireAuth,
    private dialogRef: NbDialogRef<LoginDialogComponent>
  ) { }

  ngOnInit() {
  }

  async loginWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    const credetial = await this.afAuth.auth.signInWithPopup(provider);
    return this.authService.updateUserData(credetial.user)
    .then(() =>
      setTimeout(this.dialogRef.close, 1000)
    )
    .catch(err => console.log(err));
  }

  signOut() {
    this.authService.logOut();
    setTimeout(this.dialogRef.close, 1000);
  }

}
