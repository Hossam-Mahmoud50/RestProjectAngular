import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProdcutServicesService } from '../Services/prodcut-services.service';
import { CategoriesServicesService } from '../Services/categories-services.service';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../Services/shopping-cart.service';
import { promise } from 'protractor';
import { IShoppingCart } from '../Model/ishopping-cart';

@Component({
  selector: 'app-prodcut',
  templateUrl: './prodcut.component.html',
  styleUrls: ['./prodcut.component.css']
})
export class ProdcutComponent implements OnDestroy, OnInit {

  Prodcuts: any[] = [];
  FilterProdcuts: any[] = [];
  category = '';
  cart$:Observable<IShoppingCart>;
  cart: IShoppingCart;
  subscribtionProd: Subscription;
  constructor(
    private ProdcutSEV: ProdcutServicesService,
    private route: ActivatedRoute,
    private cartSrv: ShoppingCartService) {
    this.subscribtionProd = this.ProdcutSEV.get().subscribe(prodcuts => {
      this.Prodcuts = prodcuts;
      this.route.queryParamMap.subscribe(params => {
        this.category = params.get('category');
        this.FilterProdcuts = (this.category) ? this.Prodcuts.filter(p => p.payload.val().Category === this.category) : this.Prodcuts;
      });
    });
  }
  async ngOnInit(): Promise<void> {
    this.cart$ = await this.cartSrv.GetCarts();
    this.cart$.subscribe(cart=>{
      this.cart = cart;
    })
    console.log(this.cart$);
  }

  ngOnDestroy(): void {
    this.subscribtionProd.unsubscribe();
  }
}

