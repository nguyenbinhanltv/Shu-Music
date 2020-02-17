import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {
  NbSearchModule,
  NbContextMenuModule,
  NbButtonModule,
  NbMenuModule,
  NbLayoutModule,
  NbCardModule,
  NbUserModule
} from '@nebular/theme';
import { SearchComponent } from './header/search/search.component';
import { LogoComponent } from './header/logo/logo.component';
import { LoginComponent } from './header/login/login.component';
import { ThemeComponent } from './header/theme/theme.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginDialogComponent } from './dialog/login-dialog/login-dialog.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    LogoComponent,
    LoginComponent,
    ThemeComponent,
    SidebarComponent,
    LoginDialogComponent
  ],
  imports: [
    CommonModule,
    NbSearchModule,
    NbContextMenuModule,
    NbButtonModule,
    NbMenuModule,
    NbLayoutModule,
    NbCardModule,
    NbUserModule
  ],
  entryComponents: [LoginDialogComponent],
  exports: [
    HeaderComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
