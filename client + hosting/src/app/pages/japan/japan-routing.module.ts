import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JapanComponent } from './japan.component';

const routes: Routes = [{ path: '', component: JapanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JapanRoutingModule { }
