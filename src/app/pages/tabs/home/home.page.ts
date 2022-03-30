import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banner.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  banners: any[];
  restaurants: any[];

  constructor(
    private bannerService: BannerService,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit() {
    this.loadBanners();
    this.loadRestaurants();
  }

  async loadBanners() {
    this.banners = await this.bannerService.getBanners();
  }

  async loadRestaurants() {
    this.restaurants = await this.restaurantService.getRestaurants();
  }
}
