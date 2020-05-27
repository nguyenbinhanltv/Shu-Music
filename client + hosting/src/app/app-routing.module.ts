import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'library', loadChildren: () => import('./pages/library/library.module').then(m => m.LibraryModule), canActivate: [AuthGuard]},
  { path: 'search', loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule) },
  { path: 'vietnam', loadChildren: () => import('./pages/vietnam/vietnam.module').then(m => m.VietnamModule) },
  { path: 'us-uk', loadChildren: () => import('./pages/us-uk/us-uk.module').then(m => m.UsUkModule) },
  { path: 'japan', loadChildren: () => import('./pages/japan/japan.module').then(m => m.JapanModule) },
  { path: 'korea', loadChildren: () => import('./pages/korea/korea.module').then(m => m.KoreaModule) },
  { path: 'chinese', loadChildren: () => import('./pages/chinese/chinese.module').then(m => m.ChineseModule) },
  { path: 'france', loadChildren: () => import('./pages/france/france.module').then(m => m.FranceModule) },
  { path: 'other', loadChildren: () => import('./pages/other/other.module').then(m => m.OtherModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
