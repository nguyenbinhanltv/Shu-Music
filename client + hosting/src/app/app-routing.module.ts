import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'library', loadChildren: () => import('./pages/library/library.module').then(m => m.LibraryModule), canActivate: [AuthGuard]},
  { path: 'search', loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule) },
  { path: 'vietnam', loadChildren: () => import('./pages/vietnam/vietnam.module').then(m => m.VietnamModule) },
  { path: 'us-uk', loadChildren: () => import('./pages/us-uk/us-uk.module').then(m => m.UsUkModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
