import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../Services/shopping-cart.service';

@Component({
  selector: 'app-shopping-stock',
  templateUrl: './shopping-stock.component.html',
  styleUrls: ['./shopping-stock.component.css']
})
export class ShoppingStockComponent implements OnInit {
cart$;
  constructor(private cartSrv:ShoppingCartService) { }

 async ngOnInit() {
   this.cart$ = await this.cartSrv.GetCarts();
  }

}
