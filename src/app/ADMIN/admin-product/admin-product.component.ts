import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProdcutServicesService } from '../../Services/prodcut-services.service';
import { Router } from '@angular/router';
import { Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnDestroy, OnInit {


  Prodcuts: any[];
  FilterProdcuts: any[];
  subscribtion: Subscription;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private prodSrv: ProdcutServicesService, private router: Router) {
    this.subscribtion = this.prodSrv.get().subscribe(product => {
      this.FilterProdcuts = this.Prodcuts = product;
      this.dtTrigger.next(); });
  }

  Delete(prodcutKey: string) {
    if (confirm('Are you sure you want to delete this item with ?' + prodcutKey)) {
      this.prodSrv.deleteItem(prodcutKey);
    }
    this.router.navigateByUrl('/admin/prodcut');
  }
  Filter(query: string) {
    if (query) {
      this.FilterProdcuts = this.Prodcuts.filter(p => p.payload.val().title
        .toLowerCase().includes(query.toLocaleLowerCase()));
    }
    else {
      this.FilterProdcuts = this.Prodcuts;
    }
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
  }
  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}
