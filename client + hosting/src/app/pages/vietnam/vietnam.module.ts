import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VietnamRoutingModule } from './vietnam-routing.module';
import { VietnamComponent } from './vietnam.component';
import {
  NbCardModule,
  NbUserModule,
  NbListModule,
  NbIconModule,
  NbTooltipModule
} from '@nebular/theme';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [VietnamComponent],
  imports: [
    CommonModule,
    VietnamRoutingModule,
    NbCardModule,
    NbUserModule,
    NbListModule,
    NbIconModule,
    NbTooltipModule,
    HomeModule
  ]
})
export class VietnamModule { }
