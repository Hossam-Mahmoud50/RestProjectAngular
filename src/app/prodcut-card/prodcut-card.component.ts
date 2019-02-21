import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../Services/shopping-cart.service';

@Component({
  selector: 'app-prodcut-card',
  templateUrl: './prodcut-card.component.html',
  styleUrls: ['./prodcut-card.component.css']
})
export class ProdcutCardComponent implements OnInit {
  @Input('prodcut') prodcut: any;
  @Input('ShoppingCart') ShoppingCart: any;
  constructor(private cartSRV: ShoppingCartService) { }

  ngOnInit() {
  }
  getQuantity() {
    if (!this.ShoppingCart) { return 0; }
    let item = this.ShoppingCart.items[this.prodcut.key];
      return item ? item.quantity : 0;
  }
  addtoCart() {
    this.cartSRV.addToCart(this.prodcut, 1);
  }

  Removequnatity() {
    this.cartSRV.addToCart(this.prodcut, -1);
  }
}
