import { Component, OnInit } from '@angular/core';
import { ShadeService } from '../../../core/services/shade.service';
import { Shade } from '../../../core/models/shade.interface';
import { forkJoin } from 'rxjs';
import { ProductService } from '../../../core/services/product.service';
import { Product } from '../../../core/models/product.interface';
import { CountryService } from '../../../core/services/country.service';
import { Country } from '../../../core/models/country.interface';
import { Family } from '../../../core/models/family.interface';
import { FamilyService } from '../../../core/services/family.service';

@Component({
  selector: 'app-shade',
  templateUrl: './shade.component.html',
  styleUrls: ['./shade.component.scss']
})
export class ShadeComponent implements OnInit {

  products: Product[];
  shades: Shade[];
  countries: Country[];
  selectedCountries: Country[];
  families: Family[];
  shade: Shade;
  selectedShade: Shade;
  newShade: boolean = false;
  displayDialog: boolean = false;
  isAC: boolean = false;
  isRM: boolean = false;

  constructor(
    private shadeService: ShadeService,
    private productService: ProductService,
    private countryService: CountryService,
    private familyService: FamilyService
    ) { }

  ngOnInit() {
    forkJoin(
      this.shadeService.getAll(),
      this.productService.getAll(),
      this.countryService.getAll(),
      this.familyService.getAll()
    ).subscribe(
      next => {
        this.shades = next[0];
        this.products = next[1];
        this.countries = next[2];
        this.families = next[3];
      }
    );
  }

  showDialogToAdd() {
    this.newShade = true;
    this.shade = {} as Shade;
    this.displayDialog = true;
  }

  onRowSelect(event) {
    this.newShade = false;
    this.shade = this.cloneShade(event.data);
    this.displayDialog = true;
  }

  cloneShade(s): Shade {
    let prod: Product;
    for (let product of this.products) {
      if (product.id == s.ProductId) {
        prod = product;
      }
    }
    let coun: Country;
    for (let country of this.countries) {
      if (country.id == s.country) {
        coun = country;
      }
    }
    let fam: Family;
    for (let family of this.families) {
      if (family.id == s.FamilyId) {
        fam = family;
      }
    }
    this.isAC = s.isAC;
    this.isRM = s.isRM;
    let shade: Shade = {id: s.id, family: fam, FamilyId: null, countries: s.countries, ProductId: null, name: s.name, r: s.color.r, g: s.color.g, b: s.color.b, description: s.description, itemCode: s.itemCode, isAC: s.isAC, isRM: s.isRM, product: prod};
    return shade;
  }

  save() {
    this.shade.isAC = this.isAC ? true : false;
    this.shade.isRM = this.isRM ? true : false;
    this.isAC = false;
    this.isRM = false;

    this.shade.ProductId = this.shade.product.id;
    this.shade.countries = this.selectedCountries;
    this.shade.FamilyId = this.shade.family.id;
    if (this.newShade) {
      this.shadeService.save(this.shade).subscribe(
        () => this.ngOnInit()
      );
    } else {
      this.shadeService.update(this.shade).subscribe(
        () => this.ngOnInit()
      );
    }
    this.shade = null;
    this.displayDialog = false;
  }

  delete() {
    this.shadeService.delete(this.shade).subscribe(
      () => {
        this.displayDialog = false;
        this.isAC = false;
        this.isRM = false;
        this.ngOnInit();
      }
    );
  }

}
