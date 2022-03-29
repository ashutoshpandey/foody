import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  banners: any[];

  constructor() {}

  ngOnInit() {
    this.loadBanners();
  }

  loadBanners() {
    this.banners = [
      {
        banner: '',
        link: '',
        text: 'Dominos Pizza',
      },
      {
        banner: '',
        link: '',
        text: 'Hyderabadi Biryani',
      },
      {
        banner: '',
        link: '',
        text: 'Pune Missal',
      },
    ];
  }
}
