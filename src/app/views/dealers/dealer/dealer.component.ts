import { Component, OnInit } from '@angular/core';
import { Dealer } from '../../../core/models/dealer.interface';
import { DealerService } from '../../../core/services/dealer.service';
import { CountryService } from '../../../core/services/country.service';
import { Country } from '../../../core/models/country.interface';
import { City } from '../../../core/models/city.interface';
import { CityService } from '../../../core/services/city.service';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.scss']
})
export class DealerComponent implements OnInit {

  displayDialog: boolean;
  cols: any[];
  status: [{name:'All Colors',value:'isAC'},{name:'Ready Mix',value:'isRM'}];
  dealers: Dealer[];
  dealer: Dealer;
  newDealer: boolean = false;
  selectedDealer: Dealer;
  countries: Country[];
  cities: City[];
  selectedStatus: string = "";

  constructor(private dealerService: DealerService,private countryService: CountryService,private cityService: CityService) { }

  ngOnInit() {
    this.dealerService.getAll().subscribe(
      next => {
        this.dealers = next;
        this.dealers.map((item) => {
          if(item['isAC']) {
            item['status'] = "All Colors";
          }
          else {
            item['status'] = "Ready Mix";
          }
        });
      }
    );
    this.countryService.getAll().subscribe(
      next => {
        this.countries = next;
      }
    );
    this.cityService.getAll().subscribe(
      next => {
        this.cities = next;
      }
    )
  }

  showDialogToAdd() {
    this.newDealer = true;
    this.dealer = {} as Dealer;
    this.displayDialog = true;
  }

  save() {
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
   
    if(this.newDealer) {
      this.dealerService.save(this.dealer).subscribe(
        () => this.ngOnInit()
      )
      } else {
        this.dealerService.update(this.dealer).subscribe(
          () => this.ngOnInit()
        )
      }
      this.dealer = null;
      this.displayDialog = false;
  }
  delete() {
    this.dealerService.delete(this.selectedDealer).subscribe(
      ()=>{
        this.displayDialog = false;
        this.ngOnInit();
      }
    )
  }

  onRowSelect(event) {
    this.newDealer = false;
    this.dealer = this.cloneDealer(event.data);
    this.displayDialog = true;
  }

  cloneDealer(dealer) {
    if(dealer['isAC']) {
      this.selectedStatus = "isAC";
    } else {
      this.selectedStatus = "isRM";
    }
    let count: Dealer = {id: dealer.id,name: dealer.name,address:dealer.address,longitude:dealer.longitude,latitude: dealer.latitude, country: dealer.country,city:dealer.city,status:dealer.status};
    return count;
  }

}
