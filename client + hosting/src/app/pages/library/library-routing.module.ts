import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryComponent } from './library.component';
import { LikedSongComponent } from './liked-song/liked-song.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { LikedVideoComponent } from './liked-video/liked-video.component';

const routes: Routes = [
  { path: '', component: LibraryComponent },
  { path: 'liked-song', component: LikedSongComponent, canActivate: [AuthGuard] },
  { path: 'liked-video', component: LikedVideoComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
