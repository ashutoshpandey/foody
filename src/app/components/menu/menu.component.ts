import { Component, Input, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() menus: any;
  veg: boolean = false;

  menuItems: any;

  constructor(private constantsService: ConstantsService) {}

  ngOnInit() {
    this.prepareMenuItems();
  }

  vegOnly($event) {
    this.veg = $event.detail.checked;

    this.prepareMenuItems();
  }

  prepareMenuItems() {
    let menu = this.menus.menu;
    console.log(this.menus.menu);
    this.menuItems = {};

    for (let key in menu) {
      if (!this.menuItems[key]) {
        this.menuItems[key] = {};
        this.menuItems[key].items = [];
        this.menuItems[key].name = menu[key].name;
      }

      menu[key].items.forEach((item: any) => {
        if (this.veg) {
          if (item.type.toUpperCase() == this.constantsService.TYPE_VEG) {
            this.menuItems[key].items.push(item);
          }
        } else {
          this.menuItems[key].items.push(item);
        }
      });
    }
  }
}
