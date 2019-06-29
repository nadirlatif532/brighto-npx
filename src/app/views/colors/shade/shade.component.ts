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
  styleUrls: []
})
export class ShadeComponent implements OnInit {

  products: Product[];
  shades: Shade[];
  countries: Country[];
  families: Family[];
  shade: Shade;
  selectedShade: Shade;
  selectedProducts: Product[] = [];
  newShade: boolean = false;
  displayDialog: boolean = false;
  radioVal: string = 'RM';
  loading: boolean = true;
  types:any[] = []

  constructor(
    private shadeService: ShadeService,
    private productService: ProductService,
    private countryService: CountryService,
    private familyService: FamilyService) { 
      this.types =[
        {name: 'ALL COLORS', value:false},
        {name: 'READY MIX', value:true}
      ];
    }

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
        this.families = next[3].map(family => {
          delete family["ShadeFilter"]
          return family;
        });
      },
      () => {},
      () => this.loading = false
    );
  }
  showDialogToAdd() {
    this.newShade = true;
    this.shade = {} as Shade;
    this.shade.color = {r: null, g: null, b: null};
    this.displayDialog = true;
  }

  onRowSelect(event) {
    this.newShade = false;
    this.shade = this.cloneShade(event.data);
    this.radioVal = event.data.isAC ? 'AC' : 'RM';
    this.displayDialog = true;
  }

  cloneShade(s): Shade {
    this.selectedProducts = [];
    for (let product of s.Products) {
      for (let pro of this.products) {
        if (pro.id == product.id) {
          this.selectedProducts.push(pro);
        }
      }
    }
    let shade: Shade = {id: s.id, name: s.name, color: {r: s.color.r, g: s.color.g, b: s.color.b}, description: s.description, itemCode: s.itemCode, isAC: s.isAC, isRM: s.isRM, Products: null, Countries: s.Countries, Family: s.Family };
    return shade;
  }

  save() {
    this.shade.isAC = this.radioVal == 'AC' ? true : false;
    this.shade.isRM = this.radioVal == 'RM' ? true : false;
    this.shade.Products = this.selectedProducts;
    this.loading = true;
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
    this.selectedProducts = [];
    this.radioVal = 'RM';
  }

  delete() {
    this.loading = true;
    this.shadeService.delete(this.shade).subscribe(
      () => this.ngOnInit()
    );
    this.displayDialog = false;
    this.selectedProducts = [];
    this.radioVal = 'RM';
  }
}