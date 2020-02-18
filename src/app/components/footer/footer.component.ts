import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';
import { CloudService } from 'src/app/services/cloud.service';
import { StreamState } from 'src/app/models/stream-state.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  files: Array<any> = null;
  state: StreamState;
  currentFile: any = {};

  constructor(
    private audioService: AudioService,
    private cloudService: CloudService,
    public auth: AuthService) {

    // get media files
    cloudService.getDataMusic().subscribe(data => {
      this.files = data.map(e => {
        return {
          url: e.payload.doc.get('downloadURL')
        };
      });
    });

    // listen to stream state
    this.audioService.getState()
    .subscribe(state => {
      this.state = state;
    });
  }

  ngOnInit(): void {
  }

  playStream(url) {
    this.audioService.playStream(url)
    .subscribe(events => {
      // listening for fun here
    });
  }

  openFile(file, index) {
    this.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.url);
  }

  pause() {
    this.audioService.pause();
  }

  play() {
    this.audioService.play();
  }

  stop() {
    this.audioService.stop();
  }

  next() {
    const index = this.currentFile.index + 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  previous() {
    const index = this.currentFile.index - 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    if (this.files !== null) {
      return this.currentFile.index === this.files.length - 1;
    }
  }

  onSliderChangeEnd(change) {
    this.audioService.seekTo(change.value);
  }
}
