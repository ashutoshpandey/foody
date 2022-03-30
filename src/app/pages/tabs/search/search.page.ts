import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  restaurants: any[];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {}

  onSearchChange(event) {
    this.searchRestaurants(event.detail.value);
  }

  async searchRestaurants(key: string) {
    this.restaurants = await this.restaurantService.searchRestaurants(key);
  }
}
