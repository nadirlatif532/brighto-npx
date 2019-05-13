import { Component, OnInit } from '@angular/core';
import { Category } from '../../../core/models/category.interface';
import { Product } from '../../../core/models/product.interface';
import { CategoryService } from '../../../core/services/category.service';
import { ProductService } from '../../../core/services/product.service';
import { Router } from '@angular/router';
import { CountryService } from '../../../core/services/country.service';
import { Country } from '../../../core/models/country.interface';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  categories: Category[];
  selectedCategory: Category;
  countries: Country[];
  selectedCountries: Country[];
  product: Product = {} as Product;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private countryService: CountryService,
    private router: Router
    ) {
    this.product.is_active = true;
    this.product.image = "https://images.unsplash.com/photo-1532365673558-f9bb768644e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
  }

  ngOnInit() {
    this.categoryService.getAll().subscribe(
      next => this.categories = next
    );
    this.countryService.getAll().subscribe(
      next => this.countries = next
    );
  }

  submit() {
    this.product.countries = this.selectedCountries;
    this.product.CategoryId = this.product.category.id; 
    this.productService.save(this.product).subscribe(
      () => this.router.navigate(['products', 'list'])
    );
  }

}
