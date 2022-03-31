import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant-detail.page.html',
  styleUrls: ['./restaurant-detail.page.scss'],
})
export class RestaurantDetailPage implements OnInit {
  menus: any;
  restaurant: any;
  restaurantUuid: string;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: any) => {
      this.restaurantUuid = paramMap.params.uuid;
    });

    this.getRestaurant();
  }

  async getRestaurant() {
    this.restaurant = await this.restaurantService.getRestaurant(
      this.restaurantUuid
    );

    this.menus = await this.restaurantService.getRestaurantMenu(
      this.restaurant.uuid
    );
  }
}
