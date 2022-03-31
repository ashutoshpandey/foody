import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { BannerComponent } from './banner/banner.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

@NgModule({
  declarations: [BannerComponent, RestaurantComponent, MenuComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [BannerComponent, RestaurantComponent, MenuComponent],
})
export class ComponentsModule {}
