import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { RestaurantDetailPage } from './restaurant-detail.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { RestaurantPageRoutingModule } from './restaurant-detail-routing.module';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    ComponentsModule,
    RestaurantPageRoutingModule,
  ],
  declarations: [RestaurantDetailPage],
})
export class RestaurantDetailPageModule {}
