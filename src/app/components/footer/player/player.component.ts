import { Component, OnInit, OnChanges } from '@angular/core';
import { StreamState } from 'src/app/models/stream-state.model';
import { AudioService } from 'src/app/services/audio.service';
import { CloudService } from 'src/app/services/cloud.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  state: StreamState;

  constructor(
    private audioService: AudioService,
    protected cloudService: CloudService
  ) {
    this.audioService.getState().subscribe(state => {
      this.state = state;
    });
  }

  ngOnInit() {
  }

  playStream(url) {
    this.audioService.playStream(url).subscribe(events => {
      // listening for fun here
    });
  }

  openFile(file, index) {
    this.cloudService.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.musicURL);
  }

  pause() {
    this.audioService.pause();
  }

  play() {
    this.audioService.play();
    console.log(this.cloudService.files);
    console.log(this.cloudService.currentFile);
  }

  stop() {
    this.audioService.stop();
  }

  next() {
    const index = this.cloudService.currentFile.index + 1;
    const file = this.cloudService.files[index];
    this.openFile(file, index);
  }

  previous() {
    const index = this.cloudService.currentFile.index - 1;
    const file = this.cloudService.files[index];
    this.openFile(file, index);
  }

  isFirstPlaying() {
    return this.cloudService.currentFile.index === 0;
  }

  isLastPlaying() {
    if (this.cloudService.files !== null) {
      return this.cloudService.currentFile.index === this.cloudService.files.length - 1;
    }
  }

  onSliderChangeEnd(change) {
    this.audioService.seekTo(change.value);
  }

  onSliderChangeVolume(event) {
    this.audioService.audioObj.volume = event.value;
  }
}
