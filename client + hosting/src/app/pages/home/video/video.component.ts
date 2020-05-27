import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { WindowVideoComponent } from 'src/app/components/window-video/window-video.component';
import { AudioService } from 'src/app/services/audio.service';
import { CloudService } from 'src/app/services/cloud.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, OnDestroy {

  @Input() file;
  likedVideoFile: Array<any> = [];
  user: any;

  constructor(
    public windowService: NbWindowService,
    private audioService: AudioService,
    public cloudService: CloudService,
    public authService: AuthService
  ) {
    this.getLikedVideoData();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.getLikedVideoData().unsubscribe();
  }

  openWindowVideo() {
    this.windowService.open(WindowVideoComponent, {
      title: `${this.file.title}`,
      context: {
        videoFile: `${this.file.videoFile}`
      }
    }).fullScreen();

    this.audioService.pause();
  }

  getLikedVideoData() {
    return this.authService.user$.subscribe(userData => {
      this.user = userData;
      if (this.user) {
        this.cloudService.getLikedVideoData(this.user).subscribe(data => {
          this.likedVideoFile = data.map(e => {
            return {
              videoFile: e.payload.doc.get('videoFile'),
              id: e.payload.doc.id
            };
          });
        });
      }
    });
  }

  addToLikedVideo(user, file) {
    console.log(this.likedVideoFile);
    return this.cloudService.updateLikedVideoData(user, file);
  }

  isInLikedVideo(file) {
    for (const video of this.likedVideoFile) {
      if (file.videoFile === video.videoFile) {
        return true;
      }
    }
    return false;
  }

  deleteFromLikedVideo(user, file) {
    for (const video of this.likedVideoFile) {
      if (video.videoFile === file.videoFile) {
        return this.cloudService.deleteLikeVideoData(user, video.id);
      }
    }
  }

}
