import { Component, OnInit, Input } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';
import { CloudService } from 'src/app/services/cloud.service';
import { AuthService } from 'src/app/services/auth.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  @Input() file;
  userData: Array<any> = [];

  constructor(
    private audioService: AudioService,
    protected cloudService: CloudService,
    protected authService: AuthService
  ) {}

  ngOnInit() {
  }

  playStream(url) {
    this.audioService.playStream(url).subscribe(events => {
      // listening for fun here
    });
  }

  openFile(file, index) {
    this.cloudService.files.unshift(this.file);
    index = index + 1;
    this.cloudService.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.musicURL);
  }

  addToLikedSong(file, user) {
    return this.cloudService.updateUserData(user, file);
  }
}
