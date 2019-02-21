import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ServiceAuthService {

  user$: Observable<firebase.User>;

  constructor(private afauth: AngularFireAuth, private route: ActivatedRoute) {
    this.user$ = this.afauth.authState;

  }
  login() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('ReturnUrl', returnUrl);
    this.afauth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afauth.auth.signOut();
  }
}
