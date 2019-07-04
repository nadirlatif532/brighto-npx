import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../../core/services/country.service';
import { CityService } from '../../../core/services/city.service';
import { Country } from '../../../core/models/country.interface';
import { City } from '../../../core/models/city.interface';
import { forkJoin } from 'rxjs';
import { DealerService } from '../../../core/services/dealer.service';
import { ApiService } from '../../../core/services/api.service';
import { Router } from '@angular/router';
import { SharedService } from '../../../shared/services/shared.service';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  user: any = {}
  dealer: any = {} 
  roles:any[];
  professions:any[];
  registrationError:boolean = false;
  selectedRole:string
  userId:number;
  DealerId:number
  status: [{name:'All Colors',value:'isAC'},{name:'Ready Mix',value:'isRM'}];
  selectedDealer: any;
  countries: Country[];
  cities: City[];
  filteredCities: City[];
  loading: boolean = true;
  selectedStatus: string = "";
  selectedProfession: any;
  registerErrors: Map<string, string> = new Map<string, string>();

  constructor(
    private countryService: CountryService,
    private cityService: CityService,
    private dealerService: DealerService,
    private api: ApiService,
    private router: Router,
    private sharedService: SharedService,
    private userService: UserService
  ) {
    this.selectedRole = 'CUSTOMER'
    this.selectedProfession = 'HOMEOWNER';
    this.roles =[
      {label: 'CUSTOMER', value:'CUSTOMER'},
      {label: 'DEALER', value:'DEALER'},
      {label: 'ADMIN', value:'ADMIN'},
      {label: 'DATA ENTRY', value:'DATAENTRY'},
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
    forkJoin(
      this.countryService.getAll(),
      this.cityService.getAll()
    ).subscribe(
      next => {
        this.countries = next[0];
        this.cities = next[1];
      },
      () => {},
      () => this.loading = false
    );
  }
  submit(){
    if (this.user.password !== this.user.confirmpassword) {
      this.registerErrors.set('confirmPassword', 'Password does not match');
      this.registrationError = true;
      return;
    }
    delete this.user.confirmpassword;
    this.user.role = this.selectedRole
    this.user.profession = this.selectedProfession;
    console.log(this.selectedProfession)
    this.api.post('admin/user/create', this.user).subscribe(
      (data) => {
        this.userId = data.data.id
      if(this.selectedRole != 'DEALER'){
        this.router.navigate(['user/list'])
      }},
      (error) => {
        //this.registerErrors = this.sharedService.errorObjToMap(error.errors);
        this.registrationError = true;
      },
      ()=>{
        if(this.selectedRole == 'DEALER'){
          if(!this.registrationError){
          this.dealer['name'] = this.user['firstname'] +''+ this.user['lastname']
          this.dealer['CountryId'] = this.dealer['Country'].id;
          this.dealer['CityId'] = this.dealer['City'].id;
          if(this.selectedStatus == "isRM") {
            this.dealer['isRM'] = 1;
            this.dealer['isAC'] = 0;
            }
          else {
          this.dealer['isAC'] = 1;
          this.dealer['isRM'] = 0;
          }
          this.loading = true;
            this.dealerService.save(this.dealer).subscribe(
            (data) => {this.DealerId =data.data},
            (error) => {},
            () => {
              this.userService.updateUser(this.userId,{DealerId:this.DealerId}).subscribe(
                (data)=>{this.router.navigate(['user/list'])},
                (error)=>{},
                ()=>{}
              )
            })
          }
        }
        });
      }
  filterCities(){
    let countryId = this.dealer.Country.id;
    this.filteredCities =this.cities.filter(function(city){
      return city.Country.id === countryId;
    });
  }
  
}
