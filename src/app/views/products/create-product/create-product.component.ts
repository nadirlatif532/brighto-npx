import { Component, OnInit } from '@angular/core';
import { Category } from '../../../core/models/category.interface';
import { Product } from '../../../core/models/product.interface';
import { CategoryService } from '../../../core/services/category.service';
import { ProductService } from '../../../core/services/product.service';
import { Router } from '@angular/router';
import { CountryService } from '../../../core/services/country.service';
import { Country } from '../../../core/models/country.interface';
import { Project } from '../../../core/models/project.interface';
import { ProjectService } from '../../../core/services/project.service';
import { forkJoin } from 'rxjs';
import { Surface } from '../../../core/models/surface.interface';
import { SurfaceService } from '../../../core/services/surface.service';
import { Finish } from '../../../core/models/finish.interface';
import { FinishService } from '../../../core/services/finish.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  categories: Category[];
  selectedCategory: Category;
  projectTypes: Project[];
  surfaces: Surface[];
  countries: Country[];
  finishes: Finish[];
  selectedCountries: Country[];
  product: Product = {} as Product;

  imageErr: boolean = false;
  coverImageErr: boolean = false;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private countryService: CountryService,
    private projectService: ProjectService,
    private surfaceService: SurfaceService,
    private finishService: FinishService,
    private router: Router
    ) {
    this.product.is_active = true;
  }

  ngOnInit() {
    forkJoin(
      this.categoryService.getAll(),
      this.countryService.getAll(),
      this.projectService.getAll(),
      this.surfaceService.getAll(),
      this.finishService.getAll()
    ).subscribe(
      next => {
        this.categories = next[0];
        this.countries = next[1];
        this.projectTypes = next[2];
        this.surfaces = next[3];
        this.finishes = next[4];
      }
    );
  }

  myUploader(event) {
    this.product.image = event.files[0];
    this.imageErr = false;
  }
  coverImageUploader(event) {
    this.product.coverImage = event.files[0];
    this.coverImageErr = false;
  }
  removeImageUploader(event) {
    this.imageErr = true;
  }
  removeCoverImageUploader(event) {
    this.coverImageErr = true;
  }

  submit() {
    console.log(this.product)
    if(!this.product.image) {
      this.imageErr = true;
    }
    if(!this.product.coverImage) {
      this.coverImageErr = true;
    }
    if(this.imageErr || this.coverImageErr) {
      return;
    }
    let formData = new FormData();
    formData.append('image', this.product.image, this.product.image.name);
    formData.append('coverImage', this.product.coverImage, this.product.coverImage.name);

    this.product.Countries = this.selectedCountries;

    formData.append('name',this.product.name);
    formData.append('ProjectTypeId', JSON.stringify(this.product.ProjectTypes));
    formData.append('CategoryId',JSON.stringify(this.product.Categories));
    formData.append('SurfaceId', JSON.stringify(this.product.Surfaces));
    formData.append('FinishTypeId', JSON.stringify(this.product.FinishTypes));
    formData.append('spreading',this.product.spreading.toString());
    formData.append('description',this.product.description.toString());
    formData.append('countries', JSON.stringify(this.product.Countries));
    this.productService.save(formData).subscribe(
      () => this.router.navigate(['products', 'list'])
    );
  }

}
