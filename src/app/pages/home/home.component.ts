import { Component, OnInit } from '@angular/core';
import { CloudService } from 'src/app/services/cloud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  files: Array<any> = [];
  headerFiles: Array<any> = [];

  constructor(
    private cloudService: CloudService
  ) {
    this.cloudService.getMusicData().subscribe(data => {
      this.files = data.map(e => {
        return {
          name: e.payload.doc.get('name'),
          singer: e.payload.doc.get('singer'),
          artist: e.payload.doc.get('artist'),
          musicURL: e.payload.doc.get('musicURL'),
          imgURL: e.payload.doc.get('imgURL'),
          musicPath: e.payload.doc.get('musicPath'),
          imgPath: e.payload.doc.get('imgPath')
        };
      });

      for (let i = this.files.length - 1; i > this.files.length - 7; i--) {
        this.headerFiles.push(this.files[i]);
      }
      console.log(this.headerFiles);
    });
  }

  ngOnInit() {
  }

}
