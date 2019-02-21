import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { IShoppingCart } from '../Model/ishopping-cart';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }
  create() {
    return this.db.list('/ShoppingCart').push({
      dateCreate: new Date().getTime()
    });
  }
  async GetCarts(): Promise<Observable<IShoppingCart>> {
    let cartId = await this.GetOrCreateCartId();
    return this.db.object('/ShoppingCart/' + cartId).valueChanges().map(cart => new IShoppingCart((cart as any).items));
  }
  async GetOrCreateCartId() {
    let cartId = localStorage.getItem('cart-Id');
    if (cartId) { return cartId; }
    let result = await this.create();
    localStorage.setItem('cart-Id', result.key);
    return result.key;
  }
  getItem(cartId: string, ProdcutId: string) {
    return this.db.object('/ShoppingCart/' + cartId + '/items/' + ProdcutId);
  }
  async addToCart(prodcut, count) {
    let cartId = await this.GetOrCreateCartId();
    let Items$ = this.getItem(cartId, prodcut.key);
    Items$.snapshotChanges().take(1).subscribe((item: any) => {
      if (item.payload.exists()) {
        Items$.update({ quantity: item.payload.val().quantity + count });
      } else {
        Items$.update({
          prodcut: {
            title: prodcut.payload.val().title,
            price: prodcut.payload.val().price,
            Category: prodcut.payload.val().Category,
            PhotoUrl: prodcut.payload.val().PhotoUrl
          }, quantity: 1
        });
      }
    });

  }
}
