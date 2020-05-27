import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TrackComponent } from './track/track.component';
import {
  NbCardModule,
  NbUserModule,
  NbListModule,
  NbIconModule,
  NbTooltipModule,
  NbWindowRef
} from '@nebular/theme';
import { ComponentsModule } from 'src/app/components/components.module';
import { VideoComponent } from './video/video.component';


@NgModule({
  declarations: [HomeComponent, TrackComponent, VideoComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbCardModule,
    NbUserModule,
    NbListModule,
    NbIconModule,
    NbTooltipModule,
    ComponentsModule,
  ],
  exports: [TrackComponent, VideoComponent]
})
export class HomeModule { }
