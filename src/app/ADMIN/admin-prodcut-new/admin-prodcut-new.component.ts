import { Component, OnInit } from '@angular/core';
import { CategoriesServicesService } from '../../Services/categories-services.service';
import { ProdcutServicesService } from '../../Services/prodcut-services.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
@Component({
  selector: 'app-admin-prodcut-new',
  templateUrl: './admin-prodcut-new.component.html',
  styleUrls: ['./admin-prodcut-new.component.css']
})
export class AdminProdcutNewComponent implements OnInit {
  lstCategories$;
  prodcut = {};
  id: string;

  constructor(private CateSrv: CategoriesServicesService,
    private route: ActivatedRoute,
    private prodcutSrv: ProdcutServicesService,
    private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.lstCategories$ = CateSrv.GetCategories();
    if (this.id) {
      this.prodcutSrv.getById(this.id).take(1).subscribe(prod => {
        if (prod) {
          this.prodcut = prod;
        }
      });
    }
  }
  ngOnInit() {
  }

  Save(prodcut) {
    if (this.id) {
      this.prodcutSrv.Update(this.id, prodcut);
    } else {
      this.prodcutSrv.Create(prodcut);
    }
    this.router.navigateByUrl('/admin/prodcut');
  }
}
