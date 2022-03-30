import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  constructor() {}

  async getBanners() {
    return [
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
