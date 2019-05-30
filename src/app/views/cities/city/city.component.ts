import { Component, OnInit } from '@angular/core';
import { City } from '../../../core/models/city.interface';
import { CityService } from '../../../core/services/city.service';
import { CountryService } from '../../../core/services/country.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  displayDialog: boolean;
  cols: any[];
  cities: City[];
  city: City;
  newCity: boolean = false;
  selectedCity: City;
  dropdown:any = [];

  constructor(private cityService: CityService,private countryService: CountryService) { }

  ngOnInit() {
    this.cityService.getAll().subscribe(
      next => {
        this.cities = next;
      }
    );
    this.countryService.getAll().subscribe(
      next => {
        this.dropdown = next.map((item) => {
          return {label: item.name,value: {id:item.id,name:item.name}}
        })
        this.dropdown.unshift({label:'Select Country', value:null});
        console.log(this.dropdown);
      }
    )
  }

  showDialogToAdd() {
    this.newCity = true;
    this.city = {} as City;
    this.displayDialog = true;
  }

  save() {
    if(this.newCity) {
      this.city.CountryId = this.city.CountryId['id'];
      this.cityService.save(this.city).subscribe(
        () => this.ngOnInit()
      )
    } else {
      this.cityService.update(this.city).subscribe(
        () => this.ngOnInit()
      )
    }
    this.city = null;
    this.displayDialog = false;
  }

  delete() {
    this.cityService.delete(this.selectedCity).subscribe(
      () => {
        this.displayDialog = false;
        this.ngOnInit();
      }
    );
  }

  onRowSelect(event) {
    this.newCity = false;
    this.city = this.cloneCity(event.data);
    this.displayDialog = true;
  }

  cloneCity(city) {
    let count: City = {id: city.id,name: city.name, CountryId: city.CountryId};
    return count;
  }

}
