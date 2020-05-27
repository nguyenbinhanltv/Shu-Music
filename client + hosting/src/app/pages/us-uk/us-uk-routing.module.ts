import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsUkComponent } from './us-uk.component';

const routes: Routes = [{ path: '', component: UsUkComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsUkRoutingModule { }
