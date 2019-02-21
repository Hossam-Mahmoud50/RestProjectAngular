import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CategoriesServicesService {

  constructor(private db:AngularFireDatabase) { }
  GetCategories(){
   return this.db.list('/Categories/').valueChanges();
  }
}
