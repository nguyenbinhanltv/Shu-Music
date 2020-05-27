import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VietnamComponent } from './vietnam.component';

const routes: Routes = [{ path: '', component: VietnamComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VietnamRoutingModule { }
