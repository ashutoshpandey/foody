import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { RestaurantPage } from './restaurant.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { RestaurantPageRoutingModule } from './restaurant-routing.module';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    ComponentsModule,
    RestaurantPageRoutingModule,
  ],
  declarations: [RestaurantPage],
})
export class RestaurantPageModule {}
