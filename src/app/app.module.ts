import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdminProductComponent } from './ADMIN/admin-product/admin-product.component';
import { AdminOrderComponent } from './ADMIN/admin-order/admin-order.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { ProdcutComponent } from './prodcut/prodcut.component';
import { ShoppingStockComponent } from './shopping-stock/shopping-stock.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ServiceAuthService } from './Services/service-auth.service';
import { AuthGraudsService } from './Services/auth-grauds.service';
import { AdminAuthService } from './Services/admin-auth.service';
import { AdminMangeUsersComponent } from './ADMIN/admin-mange-users/admin-mange-users.component';
import { AdminProdcutNewComponent } from './ADMIN/admin-prodcut-new/admin-prodcut-new.component';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { DataTablesModule } from 'angular-datatables';
import { ProdcutCardComponent } from './prodcut-card/prodcut-card.component';
import { ProductFilterComponent } from './prodcut/product-filter/product-filter.component';


const route: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'admin/order', component: AdminOrderComponent, canActivate: [AuthGraudsService, AdminAuthService] },
  { path: 'admin/prodcut', component: AdminProductComponent, canActivate: [AuthGraudsService, AdminAuthService] },
  { path: 'admin/prodcut/new', component: AdminProdcutNewComponent, canActivate: [AuthGraudsService, AdminAuthService] },
  { path: 'admin/prodcut/:id', component: AdminProdcutNewComponent, canActivate: [AuthGraudsService, AdminAuthService] },
  { path: 'prodcut', component: ProdcutComponent, canActivate: [AuthGraudsService] },
  { path: 'order', component: OrderComponent, canActivate: [AuthGraudsService] },
  { path: 'Login', component: LoginComponent },
  { path: 'shoppingstock', component: ShoppingStockComponent },
  { path: 'LogOut', component: HomeComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AdminProductComponent,
    AdminOrderComponent,
    LoginComponent,
    OrderComponent,
    ProdcutComponent,
    ShoppingStockComponent,
    HomeComponent,
    AdminMangeUsersComponent,
    AdminProdcutNewComponent,
    ProdcutCardComponent,
    ProductFilterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(route),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    CustomFormsModule,
    DataTablesModule
  ],
  providers: [AuthGraudsService, ServiceAuthService],
  bootstrap: [AppComponent],
  exports: [RouterModule]

})
export class AppModule { }
