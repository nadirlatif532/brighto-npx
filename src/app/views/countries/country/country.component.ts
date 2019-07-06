import { Component, OnInit } from "@angular/core";
import { CountryService } from "../../../core/services/country.service";
import { Country } from "../../../core/models/country.interface";

@Component({
  selector: "app-country",
  templateUrl: "./country.component.html",
  styleUrls: []
})
export class CountryComponent implements OnInit {
  displayDialog: boolean;
  cols: any[];
  countries: Country[];
  country: Country;
  newCountry: boolean = false;
  selectedCountry: Country;
  loading: boolean = true;

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countryService
      .getAll()
      .subscribe(
        next => (this.countries = next),
        () => {},
        () => (this.loading = false)
      );
  }

  showDialogToAdd() {
    this.newCountry = true;
    this.country = {} as Country;
    this.displayDialog = true;
  }

  save() {
    this.loading = true;
    if (this.newCountry) {
      this.countryService.save(this.country).subscribe(() => this.ngOnInit());
    } else {
      this.countryService.update(this.country).subscribe(() => this.ngOnInit());
    }
    this.country = null;
    this.displayDialog = false;
  }

  delete() {
    this.loading = true;
    this.countryService.delete(this.selectedCountry).subscribe(() => {
      this.displayDialog = false;
      this.ngOnInit();
    });
  }

  onRowSelect(event) {
    this.newCountry = false;
    this.country = this.cloneCountry(event.data);
    this.displayDialog = true;
  }

  cloneCountry(country) {
    let count: Country = {
      id: country.id,
      name: country.name,
      sequence: country.sequence
    };
    return count;
  }
}
