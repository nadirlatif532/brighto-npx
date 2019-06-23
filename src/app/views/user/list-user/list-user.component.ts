import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  users:any[] = []
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(
      (data)=>{
        this.users = data;
      },
        ()=>{},
        ()=>{});
  }

}
