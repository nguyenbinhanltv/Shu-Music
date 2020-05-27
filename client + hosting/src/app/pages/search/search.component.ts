import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbSearchService } from '@nebular/theme';
import { CloudService } from 'src/app/services/cloud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  files: Array<any> = [];
  searchFiles: Array<any> = [];
  value: any;
  typeMusic = 'v-music';

  constructor(
    private searchService: NbSearchService,
    private cloudService: CloudService,
    private router: Router
  ) {
    this.searchBySubmit();
    this.searchByInput();
    this.cloudService.getMusicData(this.typeMusic)
    .then(async data => {
      this.files = Object.values(await data)[0];
      this.files = Object.values(this.files);
    }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.searchByInput().unsubscribe();
    this.searchBySubmit().unsubscribe();
  }

  searchBySubmit() {
    return this.searchService.onSearchSubmit()
    .subscribe(data => {
      this.searchFiles = [];
      this.value = data.term;
      for (const file of this.files) {
        for (const music of file.album) {
          const name = music.title.toLocaleLowerCase().includes(data.term.toLocaleLowerCase());
          const singer = music.singer.toLocaleLowerCase().includes(data.term.toLocaleLowerCase());
          if (name || singer) {
            this.searchFiles.push(music);
          }
        }
      }
    });
  }

  searchByInput() {
    return this.searchService.onSearchInput()
    .subscribe(data => {
      this.searchFiles = [];
      this.value = data.term;
      for (const file of this.files) {
        for (const music of file.album) {
          const name = music.title.toLocaleLowerCase().includes(data.term.toLocaleLowerCase());
          const singer = music.singer.toLocaleLowerCase().includes(data.term.toLocaleLowerCase());
          if (name || singer) {
            this.searchFiles.push(music);
          }
        }
      }
    });
  }

}
