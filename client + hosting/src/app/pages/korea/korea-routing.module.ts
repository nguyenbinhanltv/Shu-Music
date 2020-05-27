import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KoreaComponent } from './korea.component';

const routes: Routes = [{ path: '', component: KoreaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KoreaRoutingModule { }
