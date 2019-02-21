import { UserInfo } from './UserInfo';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { ServiceAuthService } from './service-auth.service';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private db: AngularFireDatabase, private auth: ServiceAuthService) { }

  Save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      Name: user.displayName,
      Email: user.email,
      Phone: user.phoneNumber,
      PhotoUrl: user.photoURL
    });
  }
  getUser(uid: string) {
    return this.db.object('/users/' + uid);
  }

  get appUser$(): Observable<UserInfo> {
    return this.auth.user$.pipe(switchMap(user => {
      if (user) {
        return this.getUser(user.uid).valueChanges();
      } else {
        return of(null);
      }
    }));
  }

}
