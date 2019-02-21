import { IShoppingCartItems } from './ishopping-cart-items';
export class IShoppingCart {
  constructor(private items: IShoppingCartItems[]) {
  }
  get GetTotalItem() {
    let counter = 0;
    for (let prodcut in this.items) {
      if (this.items[prodcut]) {
        counter += this.items[prodcut].quantity;
      }
    }
    return counter;
  }
  get GetTotalPrice() {
    let price = 0;
    for (let prodcut in this.items) {
      if (this.items[prodcut]) {
      price += this.items[prodcut].prodcut.price * this.items[prodcut].quantity as number;
    }
  }
    return price;
  }
  get getPridIds() {
    return Object.keys(this.items);
  }
}
