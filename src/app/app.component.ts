import { Component } from '@angular/core';
import { ServiceAuthService } from './Services/service-auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from './Services/user-service.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RESTProject';
  constructor(
    private usersrv: UserServiceService,
    private auth: ServiceAuthService,
    private route: ActivatedRoute,
    private router: Router) {
    this.auth.user$.subscribe(user => {
      if (user){
        this.usersrv.Save(user);
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        if (returnUrl != null) {
          this.router.navigateByUrl(returnUrl);
        } else {
          this.router.navigateByUrl('/Home'); }
      }

    });
  }
}
