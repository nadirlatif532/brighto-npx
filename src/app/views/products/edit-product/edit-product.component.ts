import { Component, OnInit } from '@angular/core';
import { Category } from '../../../core/models/category.interface';
import { Country } from '../../../core/models/country.interface';
import { Product } from '../../../core/models/product.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { CountryService } from '../../../core/services/country.service';
import { ProductService } from '../../../core/services/product.service';
import { CategoryService } from '../../../core/services/category.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  categories: Category[];
  selectedCategory: Category;
  countries: Country[];
  selectedCountries: Country[];
  product: Product = {} as Product;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private countryService: CountryService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];

    this.categoryService.getAll().subscribe(
      next => this.categories = next
    );

    if (id) {
      this.productService.findById(id).subscribe(
        next => {
          this.product = next;
          this.selectedCountries = this.product["Countries"];
          this.product.category = this.product["Category"];
          // for (let category of this.categories) {
          //   if (category.id == this.product.CategoryId) {
          //     this.product.category = category;
          //   }
          // }
        }
      );
    }
    
    this.countryService.getAll().subscribe(
      next => this.countries = next
    );
  }

  submit() {
    this.product.countries = this.selectedCountries;
    this.product.CategoryId = this.product.category.id; 
    this.productService.update(this.product).subscribe(
      () => this.router.navigate(['products', 'list'])
    );
  }

}
