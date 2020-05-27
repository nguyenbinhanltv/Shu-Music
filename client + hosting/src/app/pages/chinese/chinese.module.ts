import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChineseRoutingModule } from './chinese-routing.module';
import { ChineseComponent } from './chinese.component';
import {
  NbCardModule,
  NbUserModule,
  NbListModule,
  NbIconModule,
  NbTooltipModule
} from '@nebular/theme';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [ChineseComponent],
  imports: [
    CommonModule,
    ChineseRoutingModule,
    NbCardModule,
    NbUserModule,
    NbListModule,
    NbIconModule,
    NbTooltipModule,
    HomeModule
  ]
})
export class ChineseModule { }
