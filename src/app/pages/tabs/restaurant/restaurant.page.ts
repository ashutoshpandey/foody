import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
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
  }
}
