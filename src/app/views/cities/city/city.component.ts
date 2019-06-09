import { Component, OnInit } from '@angular/core';
import { City } from '../../../core/models/city.interface';
import { CityService } from '../../../core/services/city.service';
import { CountryService } from '../../../core/services/country.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: []
})
export class CityComponent implements OnInit {

  displayDialog: boolean;
  cols: any[];
  cities: City[];
  city: City;
  newCity: boolean = false;
  selectedCity: City;
  dropdown:any = [];
  loading: boolean = true;

  constructor(
    private cityService: CityService,
    private countryService: CountryService) { }

  ngOnInit() {
    forkJoin(
      this.cityService.getAll(),
      this.countryService.getAll()
    ).subscribe(
      next => {
        this.cities = next[0];
        this.dropdown = next[1].map(item => { 
            return { label: item.name, value: {id: item.id, name: item.name} }
          }
        );
      },
      () => {},
      () => this.loading = false
    );
  }

  showDialogToAdd() {
    this.newCity = true;
    this.city = {} as City;
    this.displayDialog = true;
  }

  save() {
    this.loading = true;
    let formData = new FormData();
    formData.append('name', this.city.name)
    formData.append('CountryId', this.city.Country.id.toString());

    if (this.newCity) {
      this.cityService.save(formData).subscribe(() => this.ngOnInit())
    } else {
      this.cityService.update(formData, this.city.id).subscribe(() => this.ngOnInit())
    }
    this.city = null;
    this.displayDialog = false;
  }

  delete() {
    this.loading = true;
    this.displayDialog = false;
    this.cityService.delete(this.selectedCity).subscribe(
      () => this.ngOnInit()
    );
  }

  onRowSelect(event) {
    this.newCity = false;
    this.city = this.cloneCity(event.data);
    this.displayDialog = true;
  }

  cloneCity(city) {
    let count: City = {id: city.id,name: city.name, Country: city.Country};
    return count;
  }
}