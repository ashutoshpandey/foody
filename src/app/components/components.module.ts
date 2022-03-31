import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [BannerComponent, RestaurantComponent, MenuComponent],
  imports: [CommonModule, IonicModule],
  exports: [BannerComponent, RestaurantComponent, MenuComponent],
})
export class ComponentsModule {}
