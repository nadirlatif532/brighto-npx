import { Component, OnInit } from '@angular/core';
import { Category } from '../../../core/models/category.interface';
import { Country } from '../../../core/models/country.interface';
import { Product } from '../../../core/models/product.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { CountryService } from '../../../core/services/country.service';
import { ProductService } from '../../../core/services/product.service';
import { CategoryService } from '../../../core/services/category.service';
import { forkJoin } from 'rxjs';
import { Project } from '../../../core/models/project.interface';
import { Surface } from '../../../core/models/surface.interface';
import { Finish } from '../../../core/models/finish.interface';
import { ProjectService } from '../../../core/services/project.service';
import { SurfaceService } from '../../../core/services/surface.service';
import { FinishService } from '../../../core/services/finish.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  categories: Category[];
  selectedCategory: Category;
  projectTypes: Project[];
  surfaces: Surface[];
  countries: Country[];
  finishes: Finish[];
  selectedCountries: Country[];
  product: Product = {} as Product;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private countryService: CountryService,
    private projectService: ProjectService,
    private surfaceService: SurfaceService,
    private finishService: FinishService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {
    this.product.is_active = true;
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];

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
      },
      () => {},
      () => {
        if (id) {
          this.productService.findById(id).subscribe(
            next => {
              this.product = next;
              for (let project of this.projectTypes) {
                if (project.id == this.product.ProjectTypeId) this.product.project = project;
              }
              for (let category of this.categories) {
                if (category.id == this.product.CategoryId) this.product.category = category;
              }
              for (let surface of this.surfaces) {
                if (surface.id == this.product.SurfaceId) this.product.surface = surface;
              }
              for (let finish of this.finishes) {
                if (finish.id == this.product.FinishTypeId) this.product.finish = finish;
              }
              this.selectedCountries = this.product.Countries;
            }
          );
        }
      }
    );
  }

  myUploader(event) {
    this.product.image = event.files[0];
  }

  submit() {
    let formData = new FormData();
    formData.append('image', this.product.image, this.product.image.name);

    this.product.Countries = this.selectedCountries;

    formData.append('name',this.product.name);
    formData.append('ProjectTypeId', this.product.project.id.toString());
    formData.append('CategoryId',this.product.category.id.toString());
    formData.append('SurfaceId', this.product.surface.id.toString());
    formData.append('FinishTypeId', this.product.finish.id.toString());
    formData.append('spreading',this.product.spreading.toString());
    formData.append('description',this.product.description.toString());
    formData.append('countries', JSON.stringify(this.product.Countries));
    this.productService.update(formData, this.product.id).subscribe(
      () => this.router.navigate(['products', 'list'])
    );
  }

}
