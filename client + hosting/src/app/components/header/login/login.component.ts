import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';
import { LoginDialogComponent } from '../../dialog/login-dialog/login-dialog.component';
import { AuthService } from 'src/app/services/auth.service';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logoURL = '';

  constructor(
    private dialogService: NbDialogService,
    public authService: AuthService,
  ) { }

  ngOnInit() {
  }

  open() {
    this.dialogService.open(LoginDialogComponent);
  }

  getAvatar(user) {
    if (user.photoURL) {
      return this.logoURL = user.photoURL;
    } else {
      return this.logoURL = '../../../../assets/images/logo.jpg';
    }
  }

}
