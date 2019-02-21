import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoriesServicesService } from 'src/app/Services/categories-services.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnDestroy {

  Categories: any[] = [];
 @Input('category') category ;
  subscribtionCat: Subscription;
  constructor(private CategoriesSRV: CategoriesServicesService) {
    this.subscribtionCat = this.CategoriesSRV.GetCategories().subscribe(Categories => {
      this.Categories = Categories;
    });
   }

   ngOnDestroy(): void {
    this.subscribtionCat.unsubscribe();
  }

}
