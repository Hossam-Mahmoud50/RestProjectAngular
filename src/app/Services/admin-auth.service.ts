import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from './user-service.service';
import { UserInfo } from './UserInfo';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService implements CanActivate {
  constructor(private userSrv: UserServiceService) { }
  canActivate(): Observable<boolean> {
    return this.userSrv.appUser$.pipe(map((appuser: any) => appuser.isAdmin));

  }
}
