import { Component } from '@angular/core';
import { ServiceAuthService } from '../Services/service-auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private serviceauth: ServiceAuthService) { }

  login() {

    this.serviceauth.login();
  }
}
