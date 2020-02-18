import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadComponent } from './upload.component';
import { DropzoneDirective } from 'src/app/directives/dropzone.directive';
import { NbProgressBarModule, NbButtonModule } from '@nebular/theme';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    UploadComponent,
    UploadTaskComponent,
    UploaderComponent,
    DropzoneDirective
  ],
  imports: [
    CommonModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    UploadRoutingModule,
    NbProgressBarModule,
    NbButtonModule
  ]
})
export class UploadModule { }
