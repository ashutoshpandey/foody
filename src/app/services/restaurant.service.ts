import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  restaurants: any[];

  constructor() {
    this.restaurants = [
      {
        uuid: 'a',
        image: '',
        rating: 4.5,
        link: '',
        distance: '3.2 km',
        known_for: 'Italian',
        name: 'Dominos Pizza',
        delivery_time: '20 mins',
      },
      {
        uuid: 'b',
        image: '',
        rating: 5,
        link: '',
        distance: '3 km',
        known_for: 'Italian, North Indian',
        name: 'Hyderabadi Biryani',
        delivery_time: '40 mins',
      },
      {
        uuid: 'c',
        image: '',
        rating: 4,
        link: '',
        distance: '4 km',
        known_for: 'Italian, Chinese',
        name: 'Pune Missal',
        delivery_time: '15 mins',
      },
    ];
  }

  async getRestaurants() {
    return this.restaurants;
  }

  async searchRestaurants(key: string) {
    if (key != null && key.trim().length > 0) {
      return await this.restaurants.filter((element: any) => {
        return element.name
          ? element.name.toLowerCase().includes(key.toLowerCase())
          : null;
      });
    } else {
      return Promise.resolve([]);
    }
  }

  async getRestaurant(uuid: string) {
    if (uuid != null && uuid.trim().length > 0) {
      return await this.restaurants.find((element: any) => {
        return element.name ? element.uuid == uuid : null;
      });
    } else {
      return Promise.resolve(null);
    }
  }
}
