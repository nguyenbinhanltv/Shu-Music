import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: ['home']
    },
    {
      title: 'Library',
      icon: 'book-outline',
      link: ['library'],
      children: [
        {
          title: 'First Library',
          icon: 'book-open-outline',
        }
      ],
    },
    {
      title: 'Playlist',
      icon: 'list-outline',
      link: ['playlist'],
      children: [
        {
          title: 'New Playlist',
          icon: 'plus-square-outline'
        },
        {
          title: 'Liked Song',
          icon: 'heart-outline',
          link: ['liked-song']
        },
      ],
    },
    {
      title: 'Upload music',
      icon: 'cloud-upload-outline',
      link: ['upload']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
