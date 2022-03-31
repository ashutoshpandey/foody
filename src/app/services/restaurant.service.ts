import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(
    private httpService: HttpService,
    private constantsService: ConstantsService
  ) {}

  async getRestaurants() {
    return new Promise((resolve, reject) => {
      //let data: any = { recordsToSkip: 0, pageSize: 10 };

      this.httpService
        .get(this.constantsService.API.GET_RESTAURANTS)
        .subscribe((restaurants: any) => {
          resolve(restaurants);
        });
    });
  }

  async searchRestaurants(key: string) {
    return new Promise((resolve, reject) => {
      if (key != null && key.trim().length > 0) {
        let data: any = { recordsToSkip: 0, pageSize: 10 };

        this.httpService
          .post(this.constantsService.API.GET_RESTAURANTS, data)
          .subscribe((restaurants: any) => {
            let filteredRestaurants = restaurants.filter((element: any) => {
              return element.name
                ? element.name.toLowerCase().includes(key.toLowerCase())
                : null;
            });

            resolve(filteredRestaurants);
          });
      } else {
        return Promise.resolve(null);
      }
    });
  }

  async getRestaurant(restaurantUuid: string) {
    if (restaurantUuid != null && restaurantUuid.trim().length > 0) {
      let restaurants: any = await this.getRestaurants();

      return await restaurants.find((element: any) => {
        return element.name ? element.uuid == restaurantUuid : null;
      });
    } else {
      return Promise.resolve(null);
    }
  }

  async getRestaurantMenu(restaurantUuid: string) {
    return new Promise((resolve, reject) => {
      if (restaurantUuid != null && restaurantUuid.trim().length > 0) {
        this.httpService
          .get(this.constantsService.API.GET_RESTAURANT_MENU)
          .subscribe((menus: any) => {
            let menu = menus.find((element: any) => {
              return element.uuid ? element.uuid == restaurantUuid : null;
            });

            resolve(menu);
          });
      } else {
        return reject();
      }
    });
  }
}
