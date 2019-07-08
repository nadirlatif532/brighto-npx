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
  selectedRole:any = {}
  displayDialog = false;
  professions:any[];
  selectedProfession: any = {};
  checked: boolean = false;

  constructor(
    private userService: UserService) {
    this.roles =[
    {label: 'CUSTOMER', value:'CUSTOMER'},
    {label: 'DEALER', value:'DEALER'},
    {label: 'ADMIN', value:'ADMIN'},
    {label: 'DATAENTRY', value:'DATAENTRY'},
  ];
  this.professions =[
    {label: 'HOMEOWNER', value:'HOMEOWNER'},
    {label: 'ARCHITECT', value:'ARCHITECT'},
    {label: 'INTERIORDESIGNER', value:'INTERIORDESIGNER'},
    {label: 'BUILDER', value:'BUILDER'},
    {label: 'DEVELOPER', value:'DEVELOPER'},
    {label: 'OTHER', value:'OTHER'},
  ];
 }

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
    this.selectedRole = {label: this.user.role, value:this.user.role};
    this.selectedProfession = {label: this.user.profession, value:this.user.profession};
    this.displayDialog = true;
  }
  cloneUser(user) {
    let count: any = { id: user.id, firstname: user.firstname, lastname: user.lastname, username: user.username, email: user.email, role:user.role, profession:user.profession, phone:user.phone, country:user.country, city:user.city};
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
    this.user.role = this.selectedRole.value;
    this.user.profession = this.selectedProfession.value;
    this.userService.updateUser(this.user.id,this.user).subscribe(
      ()=>{
        this.ngOnInit()
        this.displayDialog=false;}
    );
  }
}
