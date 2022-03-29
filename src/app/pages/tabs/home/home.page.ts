import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  banners: any[];
  restaurants: any[];

  constructor() {}

  ngOnInit() {
    this.loadBanners();
    this.loadRestaurants();
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

  loadRestaurants() {
    this.restaurants = [
      {
        image: '',
        rating: 4.5,
        link: '',
        distance: '3.2 km',
        known_for: 'Italian',
        name: 'Dominos Pizza',
        delivery_time: '20 mins',
      },
      {
        image: '',
        rating: 5,
        link: '',
        distance: '3 km',
        known_for: 'Italian, North Indian',
        text: 'Hyderabadi Biryani',
        delivery_time: '40 mins',
      },
      {
        image: '',
        rating: 4,
        link: '',
        distance: '4 km',
        known_for: 'Italian, Chinese',
        text: 'Pune Missal',
        delivery_time: '15 mins',
      },
    ];
  }
}
