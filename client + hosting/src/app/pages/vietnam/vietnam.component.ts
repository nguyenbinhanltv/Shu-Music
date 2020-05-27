import { Component, OnInit } from '@angular/core';
import { CloudService } from 'src/app/services/cloud.service';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-vietnam',
  templateUrl: './vietnam.component.html',
  styleUrls: ['./vietnam.component.scss']
})
export class VietnamComponent implements OnInit {

  files: any;
  headerFiles: Array<any> = [];

  typeMusic = 'v-music';

  constructor(
    public cloudService: CloudService,
    public audioService: AudioService
  ) {
    this.cloudService.getMusicData(this.typeMusic)
    .then(async data => {
      this.files = await Object.values(Object.values(data)[0]);
      for (let i = 0; i < 5; i++) {
        this.headerFiles.push(this.files[0].album[i]);
      }
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
