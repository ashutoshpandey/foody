import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant-detail.page.html',
  styleUrls: ['./restaurant-detail.page.scss'],
})
export class RestaurantDetailPage implements OnInit {
  menus: any;
  restaurant: any;
  baseUrl: string;
  restaurantUuid: string;

  cart: any = {};
  itemCount: number = 0;
  totalAmount: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {
    this.baseUrl = '/tabs';
  }

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

  updateCartCount($event) {
    this.cart = $event;
  }

  viewCart() {
    this.router.navigate([this.baseUrl + '/cart/' + this.restaurantUuid]);
  }
}
