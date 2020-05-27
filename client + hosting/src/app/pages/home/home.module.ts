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
  NbTooltipModule
} from '@nebular/theme';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [HomeComponent, TrackComponent],
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
  exports: [TrackComponent]
})
export class HomeModule { }
