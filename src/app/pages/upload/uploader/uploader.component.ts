import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

  musicFiles: File[] = [];
  imgFiles: File[] = [];

  name = new FormControl('', [Validators.required, Validators.maxLength(100)]);
  singer = new FormControl('', [Validators.required, Validators.maxLength(100)]);
  artist = new FormControl('', [Validators.required, Validators.maxLength(100)]);

  constructor() { }

  ngOnInit() {
  }

  receivedImgFile(event) {
    this.imgFiles = event;
  }

  receivedMusicFile(event) {
    this.musicFiles = event;
  }

  log() {
    console.log(`${this.imgFiles}, ${this.musicFiles}`);
  }
}
