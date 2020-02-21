import { Component, OnInit, Input } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';
import { CloudService } from 'src/app/services/cloud.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  @Input() file;

  constructor(
    private audioService: AudioService,
    public cloudService: CloudService
  ) { }

  ngOnInit() {
  }

  playStream(url) {
    this.audioService.playStream(url).subscribe(events => {
      // listening for fun here
    });
  }

  openFile(file, index) {
    index = index + 1;
    this.cloudService.currentFile = { index, file };
    this.cloudService.files.push(this.file);
    this.audioService.stop();
    this.playStream(file.musicURL);
  }
}
