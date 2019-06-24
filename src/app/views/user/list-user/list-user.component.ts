import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  users:any[] = []
  user:any = {}
  roles:any[];
  selectedUser:any = {}
  displayDialog = false
  constructor(
    private userService: UserService) {
    this.roles =[
    {label: 'USER', value:'USER'},
    {label: 'DEALER', value:'DEALER'},
    {label: 'ADMIN', value:'ADMIN'},
    {label: 'DATA ENTRY', value:'DATAENTRY'},
  ]; }

  ngOnInit() {
    this.userService.getAll().subscribe(
      (data)=>{
        this.users = data;
      },
        ()=>{},
        ()=>{});
  }
  onRowSelect(event) {
    this.user = this.cloneUser(event.data);
    this.displayDialog = true;
  }
  cloneUser(user) {
    let count: any = { id: user.id, firstname: user.firstname, lastname: user.lastname, username: user.username, email: user.email};
    return count;
  }
  delete() {
    this.userService.delete(this.selectedUser).subscribe(
      () => {
        this.displayDialog = false;
        this.ngOnInit();
      }
    )
  }
  save(){
    this.userService.updateUser(this.user.id,this.user).subscribe(
      ()=>{
        this.ngOnInit()
        this.displayDialog=false;}
    );
  }
}
