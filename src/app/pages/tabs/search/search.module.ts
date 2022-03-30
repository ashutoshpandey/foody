import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { SearchPage } from './search.page';
import { SearchPageRoutingModule } from './search-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    ComponentsModule,
    SearchPageRoutingModule,
  ],
  declarations: [SearchPage],
})
export class SearchPageModule {}
