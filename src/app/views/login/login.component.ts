import { Component } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  email: string;
  password: string;
  loginErrors: Map<string, string> = new Map<string, string>();

  constructor(
    private api: ApiService, 
    private router: Router,
    private sharedService: SharedService) {}

  submit() {
    this.api.post('u/login', {email: this.email, password: this.password}).subscribe(
      next => {
        localStorage.setItem('id_token', next.token);
        this.router.navigate(['dashboard']);
      },
      error => this.loginErrors = this.sharedService.errorObjToMap(error.errors)
    )
  }
}
