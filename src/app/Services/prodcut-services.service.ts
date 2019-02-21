import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProdcutServicesService {

  constructor(private db: AngularFireDatabase) { }
  Create(prodcut) {
    this.db.list('/Prodcuts').push(prodcut);
  }
  get() {
    return this.db.list('/Prodcuts').snapshotChanges();
  }
  getById(prodcutId: string) {
    return this.db.object('/Prodcuts/' + prodcutId).valueChanges();
  }
  Update(ProdcutId: string, Prodcut) {
    return this.db.object('/Prodcuts/' + ProdcutId).update(Prodcut);
  }
  deleteItem(ProdcutId: string) {
    return this.db.object('/Prodcuts/' + ProdcutId).remove();
  }
}
