import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JapanRoutingModule } from './japan-routing.module';
import { JapanComponent } from './japan.component';
import {
  NbCardModule,
  NbUserModule,
  NbListModule,
  NbIconModule,
  NbTooltipModule
} from '@nebular/theme';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [JapanComponent],
  imports: [
    CommonModule,
    JapanRoutingModule,
    NbCardModule,
    NbUserModule,
    NbListModule,
    NbIconModule,
    NbTooltipModule,
    HomeModule
  ]
})
export class JapanModule { }
