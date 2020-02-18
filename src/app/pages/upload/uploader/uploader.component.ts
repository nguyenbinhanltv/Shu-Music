import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

  isHovering: boolean;
  files: File[] = [];

  name = new FormControl('', [Validators.required, Validators.maxLength(100)]);
  singer = new FormControl('', [Validators.required, Validators.maxLength(100)]);
  artist = new FormControl('', [Validators.required, Validators.maxLength(100)]);

  constructor() { }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

  ngOnInit() {
  }

}
