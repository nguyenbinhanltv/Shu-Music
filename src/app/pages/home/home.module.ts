import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TrackComponent } from './track/track.component';
import {
  NbCardModule,
  NbUserModule,
  NbListModule,
  NbIconModule
} from '@nebular/theme';


@NgModule({
  declarations: [HomeComponent, TrackComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbCardModule,
    NbUserModule,
    NbListModule,
    NbIconModule
  ],
  exports: [TrackComponent]
})
export class HomeModule { }
