import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConstantsService {
  API: any = {
    GET_RESTAURANT_MENU: 'assets/data/menu.json',
    GET_RESTAURANTS: 'assets/data/restaurants.json',
    SEARCH_RESTAURANTS: 'assets/data/restaurants.json',
  };
}
