import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() menus: any;
  @Output() notifyUpdateCart: EventEmitter<any> = new EventEmitter<any>();

  cart: any = {};
  veg: boolean = false;

  menuItems: any;

  constructor(
    private storageService: StorageService,
    private constantsService: ConstantsService
  ) {
    this.cart.itemCount = 0;
    this.cart.totalAmount = 0;
    this.cart.cartItems = [];
  }

  ngOnInit() {
    this.loadCart();
  }

  async loadCart() {
    let storedCart = await this.storageService.getValue('cart');

    if (storedCart) {
      this.cart = storedCart;
    }

    this.prepareMenuItems();
  }

  vegOnly($event) {
    this.veg = $event.detail.checked;

    this.prepareMenuItems();
  }

  prepareMenuItems() {
    let menu = this.menus.menu;

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

  addCartItem(item: any) {
    this.addItemToCart(item);
  }

  removeCartItem(item: any) {
    this.removeItemFromCart(item);
  }

  addItemToCart(item: any) {
    // Check if item is already added to cart, if yes, add count
    // Otherwise add to cart

    let found: boolean = false;
    this.cart.cartItems.forEach((cartItem) => {
      // if item is already added to cart, increase count
      if (cartItem.item.id == item.id) {
        found = true;
        cartItem.count++;

        if (!item.count) {
          item.count = 0;
        }

        item.count++;
      }
    });

    // if item is not added to cart, add it
    if (!found) {
      item.count = 1;

      this.cart.cartItems.push({
        count: 1,
        item: item,
      });
    }

    this.updateCartCountTotal();
  }

  removeItemFromCart(item: any) {
    // Check if item is already added to cart, if yes, add count
    // Otherwise add to cart

    let tempCartItems: any = [];
    let found: boolean = false;
    this.cart.cartItems.forEach((cartItem) => {
      // if item is already added to cart, increase count
      if (cartItem.item.id == item.id) {
        found = true;
        cartItem.count--;

        // if item was added multiple times, just decrease count
        if (cartItem.count > 0) {
          item.count--;
          tempCartItems.push(cartItem);
        } else {
          item.count = 0;
        }
      } else {
        tempCartItems.push(cartItem);
      }
    });

    // if item is not added to cart, add it
    if (!found) {
      console.log('Item not added to cart');
    } else {
      this.cart.cartItems = tempCartItems;
      this.updateCartCountTotal();
    }
  }

  updateCartCountTotal() {
    this.cart.itemCount = 0;
    this.cart.totalAmount = 0;

    this.cart.cartItems.forEach((cartItem) => {
      this.cart.itemCount += cartItem.count;
      this.cart.totalAmount += parseFloat(cartItem.item.price) * cartItem.count;
    });

    this.storageService.setValue('cart', this.cart);

    this.notifyUpdateCart.emit(this.cart);
  }
}
