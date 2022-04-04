import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cart: any;
  baseUrl: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: any) => {
      this.baseUrl = '/tabs/restaurant/' + paramMap.params.uuid;

      this.loadCart();
    });
  }

  async loadCart() {
    let storedCart = await this.storageService.getValue('cart');

    if (storedCart && storedCart.itemCount && storedCart.itemCount > 0) {
      this.cart = storedCart;
    } else {
      this.moveToRestaurant();
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

    if (this.cart && this.cart.cartItems && this.cart.cartItems.length > 0) {
      this.cart.cartItems.forEach((cartItem) => {
        this.cart.itemCount += cartItem.count;
        this.cart.totalAmount +=
          parseFloat(cartItem.item.price) * cartItem.count;
      });

      this.storageService.setValue('cart', this.cart);
    } else {
      this.storageService.setValue('cart', null);
      this.moveToRestaurant();
    }
  }

  moveToRestaurant() {
    this.router.navigate([this.baseUrl]);
  }
}
