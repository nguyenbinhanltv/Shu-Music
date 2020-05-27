import { Component, OnInit, OnDestroy } from '@angular/core';
import { CloudService } from 'src/app/services/cloud.service';
import { AuthService } from 'src/app/services/auth.service';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-liked-video',
  templateUrl: './liked-video.component.html',
  styleUrls: ['./liked-video.component.scss']
})
export class LikedVideoComponent implements OnInit, OnDestroy {

  likedVideoFile: Array<any> = [];
  user: any;

  constructor(
    protected cloudService: CloudService,
    protected authService: AuthService,
    protected audioService: AudioService
  ) {
    this.getUserData();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.getUserData().unsubscribe();
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
  }

  playLikedVideoPlaylist() {
    if (this.user) {
      this.likedVideoFile.forEach(file => {
        this.openFile(file, this.cloudService.index);
      });
      this.playStream(this.cloudService.files[0].musicFile);
    }
  }

  getUserData() {
    return this.authService.user$.subscribe(userData => {
      this.user = userData;
      if (this.user) {
        this.cloudService.getLikedVideoData(this.user).subscribe(data => {
          this.likedVideoFile = data.map(e => e.payload.doc.data());
        });
      }
    });
  }

}
