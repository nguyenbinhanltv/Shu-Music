import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChineseComponent } from './chinese.component';

const routes: Routes = [{ path: '', component: ChineseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChineseRoutingModule { }
