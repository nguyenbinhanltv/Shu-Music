import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FranceComponent } from './france.component';

const routes: Routes = [{ path: '', component: FranceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FranceRoutingModule { }
