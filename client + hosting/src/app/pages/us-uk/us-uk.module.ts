import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsUkRoutingModule } from './us-uk-routing.module';
import { UsUkComponent } from './us-uk.component';
import {
  NbCardModule,
  NbUserModule,
  NbListModule,
  NbIconModule,
  NbTooltipModule
} from '@nebular/theme';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [UsUkComponent],
  imports: [
    CommonModule,
    UsUkRoutingModule,
    NbCardModule,
    NbUserModule,
    NbListModule,
    NbIconModule,
    NbTooltipModule,
    HomeModule
  ]
})
export class UsUkModule { }
