import { Component, OnInit, OnDestroy } from '@angular/core';
import { CloudService } from 'src/app/services/cloud.service';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  files: Array<any>;
  videoFiles: Array<any>;
  headerFiles: Array<any> = [];

  typeMusic = 'v-music';
  typeVideo = 'v-video';

  constructor(
    public cloudService: CloudService,
    public audioService: AudioService
  ) {
    this.getMusicData();
    this.getVideoData();
  }

  getMusicData() {
    this.cloudService.getMusicData(this.typeMusic)
    .then(async data => {
      this.files = await Object.values(Object.values(data)[0]);
      for (let i = 0; i < 5; i++) {
        this.headerFiles.push(this.files[0].album[i]);
      }
    }
    );
  }

  getVideoData() {
    this.cloudService.getVideoData(this.typeVideo)
    .then(async data => {
      this.videoFiles = await Object.values(Object.values(data)[0]);
    }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  playStream(url) {
    this.audioService.playStream(url).subscribe(events => {
      // listening for fun here
    });
  }

  playVideo(event) {
    event.toElement.play();
  }

  openFile(file, index) {
    this.cloudService.files.unshift(file);
    index = index + 1;
    this.cloudService.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.musicFile);
  }

}
