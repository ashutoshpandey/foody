import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

@NgModule({
  declarations: [BannerComponent, RestaurantComponent],
  imports: [CommonModule, IonicModule],
  exports: [BannerComponent, RestaurantComponent],
})
export class ComponentsModule {}
