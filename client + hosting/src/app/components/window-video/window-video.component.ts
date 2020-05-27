import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-window-video',
  templateUrl: './window-video.component.html',
  styleUrls: ['./window-video.component.scss']
})
export class WindowVideoComponent implements OnInit {

  @Input() videoFile;

  constructor() { }

  ngOnInit() {
  }
}
