import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';

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
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getCurrentLoggedInUser().subscribe(
      next => {
        this.user = next;
      });
  }
  onSubmit(){}
}
