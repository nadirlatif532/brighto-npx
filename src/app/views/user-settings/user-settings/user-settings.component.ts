import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { ApiService } from '../../../core/services/api.service';
import { Router } from '@angular/router';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  user: any = {} ;
  oldPassword:any=null;
  newPassword:any=null;
  confirmPassword:any=null;
  registerErrors: Map<string, string> = new Map<string, string>();
  constructor(
    private userService: UserService,
    private api: ApiService,
    private router: Router,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.userService.getCurrentLoggedInUser().subscribe(
      next => {
        this.user = next;
      });
  }
  onSubmit(){
    if (this.newPassword !== this.confirmPassword) {
      this.registerErrors.set('confirmPassword', 'Password does not match');
      return;
    }
    this.user.oldPassword = this.oldPassword;
    this.user.newPassword = this.newPassword;

    this.userService.updateUser(this.user.id,this.user).subscribe(
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
