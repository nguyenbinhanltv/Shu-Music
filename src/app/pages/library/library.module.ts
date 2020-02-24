import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import { NbCardModule, NbTableModule, NbTabsetModule, NbRouteTabsetModule, NbIconModule } from '@nebular/theme';
import { PlaylistDetailComponent } from './playlist-detail/playlist-detail.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { LikedSongComponent } from './liked-song/liked-song.component';


@NgModule({
  declarations: [LibraryComponent, PlaylistDetailComponent, AlbumDetailComponent, ArtistDetailComponent, LikedSongComponent],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    NbCardModule,
    NbTableModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbIconModule
  ]
})
export class LibraryModule { }
