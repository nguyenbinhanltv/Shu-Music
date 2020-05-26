import { Component, OnInit, OnDestroy } from '@angular/core';
import { CloudService } from 'src/app/services/cloud.service';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  files: any;
  headerFiles: Array<any> = [];

  constructor(
    public cloudService: CloudService,
    public audioService: AudioService
  ) {
    this.cloudService.getMusicData()
    .then(async data => {
      this.files = Object.values(await data)[0];
      this.files = Object.values(this.files);
      console.log(this.files);
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

  openFile(file, index) {
    this.cloudService.files.unshift(file);
    index = index + 1;
    this.cloudService.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.musicFile);
  }

}
