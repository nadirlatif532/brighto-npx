import { Component } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  user: any = {};
  registerErrors: Map<string, string> = new Map<string, string>();

  constructor(
    private api: ApiService,
    private router: Router,
    private sharedService: SharedService) { }

  submit() {
    if (this.user.password !== this.user.confirmPassword) {
      this.registerErrors.set('confirmPassword', 'Password does not match');
      return;
    }

    delete this.user.confirmPassword;

    this.api.post('u/signup', this.user).subscribe(
      () => this.router.navigate(['dashboard']),
      error => this.setErrors(error.errors.errors)
    );
  }
  setErrors(errors){
    for(let error of errors){
      this.registerErrors.set(error.path,error.message)
    }
  }
}
