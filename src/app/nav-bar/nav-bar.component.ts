import { Component, OnInit } from '@angular/core';
import { ServiceAuthService } from '../Services/service-auth.service';
import { UserServiceService } from '../Services/user-service.service';
import { map } from 'rxjs/operators';
import { UserInfo } from '../Services/UserInfo';
import { ShoppingCartService } from '../Services/shopping-cart.service';
import { Observable } from 'rxjs';
import { IShoppingCart } from '../Model/ishopping-cart';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  appuser: UserInfo;
  isLogined: boolean;
  cart$:Observable<IShoppingCart>;
  constructor(public serviceauth: ServiceAuthService,
    private userSrv: UserServiceService,
    private cartSev: ShoppingCartService) {
    this.userSrv.appUser$.subscribe(appUser => this.appuser = appUser);
  }


  async ngOnInit() {
    this.cart$ = await this.cartSev.GetCarts();
  }
  logout() {
    this.serviceauth.logout();
  }
}
