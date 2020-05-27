import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';
import { CloudService } from 'src/app/services/cloud.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit, OnDestroy {

  @Input() file;
  likedSongFile: Array<any> = [];
  user: any;

  constructor(
    private audioService: AudioService,
    public cloudService: CloudService,
    public authService: AuthService
  ) {
    this.getLikedSongData();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.getLikedSongData().unsubscribe();
  }

  getLikedSongData() {
    return this.authService.user$.subscribe(userData => {
      this.user = userData;
      if (this.user) {
        this.cloudService.getLikedSongData(this.user).subscribe(data => {
          this.likedSongFile = data.map(e => {
            return {
              musicFile: e.payload.doc.get('musicFile'),
              id: e.payload.doc.id
            };
          });
        });
      }
    });
  }

  playStream(url) {
    this.audioService.playStream(url).subscribe(events => {
      // listening for fun here
    });
  }

  openFile(file, index) {
    this.cloudService.files.unshift(file);
    index = index + 1;
    this.cloudService.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.musicFile);
  }

  addToLikedSong(user, file) {
    return this.cloudService.updateLikedSongData(user, file);
  }

  isInLikedSong(file) {
    for (const song of this.likedSongFile) {
      if (file.musicFile === song.musicFile) {
        return true;
      }
    }
    return false;
  }

  deleteFromLikedSong(user, file) {
    for (const song of this.likedSongFile) {
      if (song.musicFile === file.musicFile) {
        return this.cloudService.deleteLikeSongData(user, song.id);
      }
    }
  }
}
