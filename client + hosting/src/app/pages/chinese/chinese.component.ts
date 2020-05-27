import { Component, OnInit } from '@angular/core';
import { CloudService } from 'src/app/services/cloud.service';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-chinese',
  templateUrl: './chinese.component.html',
  styleUrls: ['./chinese.component.scss']
})
export class ChineseComponent implements OnInit {

  files: Array<any>;
  videoFiles: Array<any>;
  headerFiles: Array<any> = [];

  typeMusic = 'c-music';
  typeVideo = 'c-video';

  constructor(
    public cloudService: CloudService,
    public audioService: AudioService,
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

}
