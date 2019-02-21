import { Injectable } from '@angular/core';
import { ServiceAuthService } from './service-auth.service';
import { Router, RouterStateSnapshot, CanActivate } from '@angular/router';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthGraudsService implements CanActivate {
  constructor(private authservice: ServiceAuthService, private route: Router) { }

  canActivate(route, state: RouterStateSnapshot) {
    return this.authservice.user$.pipe(map(user => {
      if (user) {
        return true;
      } else {
        this.route.navigate(['/Login'], { queryParams: { returnUrl: state.url } });
        return false;
      }
    }));
  }
}
