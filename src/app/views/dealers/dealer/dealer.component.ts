import { Component, OnInit } from '@angular/core';
import { Dealer } from '../../../core/models/dealer.interface';
import { DealerService } from '../../../core/services/dealer.service';
import { CountryService } from '../../../core/services/country.service';
import { Country } from '../../../core/models/country.interface';
import { City } from '../../../core/models/city.interface';
import { CityService } from '../../../core/services/city.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: []
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
  filteredCities: City[];
  loading: boolean = true;
  selectedStatus: string = "";

  constructor(
    private dealerService: DealerService,
    private countryService: CountryService,
    private cityService: CityService) { }

  ngOnInit() {
    forkJoin(
      this.dealerService.getAll(),
      this.countryService.getAll(),
      this.cityService.getAll()
    ).subscribe(
      next => {
        this.dealers = next[0];
        this.dealers.map((item) => {
          if (item['isAC']) item['status'] = "All Colors";
          else item['status'] = "Ready Mix";
        });
        this.countries = next[1];
        this.cities = next[2];
      },
      () => {},
      () => this.loading = false
    );
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
    this.loading = true;
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
    this.loading = true;
    this.dealerService.delete(this.selectedDealer).subscribe(
      ()=>this.ngOnInit()
    );
    this.displayDialog = false;
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
    let count: Dealer = {id: dealer.id,name: dealer.name,address:dealer.address,longitude:dealer.longitude,latitude: dealer.latitude, Country: dealer.Country,City:dealer.City,status:dealer.status};
    return count;
  }
  filterCities(){
    let countryId = this.dealer.Country.id;
    console.log(countryId)
    this.filteredCities =this.cities.filter(function(city){
      return city.Country.id === countryId;
    });
  }
}