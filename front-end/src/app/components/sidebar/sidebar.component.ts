import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CloudService } from 'src/app/services/cloud.service';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  user: any;
  menuItems = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: ['home'],
    },
    {
      title: 'Library',
      icon: 'book-outline',
      link: ['library'],
    },
    {
      title: 'Playlist',
      icon: 'headphones-outline',
      children: [
        {
          title: 'Liked Song',
          icon: 'heart-outline',
          link: ['library/liked-song']
        },
      ],
    },
    {
      title: 'Upload music',
      icon: 'cloud-upload-outline',
      link: ['upload']
    }
  ];

  constructor(
    private authService: AuthService,
    private menuService: NbMenuService
  ) {
    this.authService.user$.subscribe(userData => {
      this.user = userData;
    });
  }

  ngOnInit() {
  }
}
