import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KoreaRoutingModule } from './korea-routing.module';
import { KoreaComponent } from './korea.component';
import {
  NbCardModule,
  NbUserModule,
  NbListModule,
  NbIconModule,
  NbTooltipModule
} from '@nebular/theme';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [KoreaComponent],
  imports: [
    CommonModule,
    KoreaRoutingModule,
    NbCardModule,
    NbUserModule,
    NbListModule,
    NbIconModule,
    NbTooltipModule,
    HomeModule
  ]
})
export class KoreaModule { }
