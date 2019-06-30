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
import { Packagings } from '../../../core/models/packaging.interface';
import { PackagingService } from '../../../core/services/packaging.service';

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
  packagings: Packagings[];
  loading:boolean = true;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private countryService: CountryService,
    private projectService: ProjectService,
    private surfaceService: SurfaceService,
    private finishService: FinishService,
    private activatedRoute: ActivatedRoute,
    private packagingService: PackagingService,
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
      this.finishService.getAll(),
      this.packagingService.getAll()
    ).subscribe(
      next => {
        this.categories = next[0];
        this.countries = next[1];
        this.projectTypes = next[2];
        this.surfaces = next[3];
        this.finishes = next[4];
        this.packagings = next[5];
      },
      () => {},
      () => {
        if (id) {
          this.productService.findById(id).subscribe(
            next => {
              this.product = next[0];
            },
            () => {},
            () => {this.loading=false}
          );
        }
      }
    );
  }

  myUploader(event) {
    this.product.image = event.files[0];
  }
  coverImageUploader(event) {
    this.product.coverImage = event.files[0];
  }

  submit() {
    let formData = new FormData();
    formData.append('image', this.product.image);
    formData.append('coverImage', this.product.coverImage);

    let ProjectTypes = this.product.ProjectTypes.map((item)=>item.id);
    let Categories =   this.product.Categories.map((item)=>item.id);
    let Surfaces =     this.product.Surfaces.map((item) => item.id);
    let FinishTypes =  this.product.FinishTypes.map((item) => item.id);
    let packagings =  this.product.Packagings.map((item) => item.id);

    formData.append('name',this.product.name);
    formData.append('ProjectTypeId', JSON.stringify(ProjectTypes));
    formData.append('CategoryId',    JSON.stringify(Categories));
    formData.append('SurfaceId',     JSON.stringify(Surfaces));
    formData.append('FinishTypeId',  JSON.stringify(FinishTypes));
    formData.append('spreading',this.product.spreading.toString());
    formData.append('description',this.product.description.toString());
    formData.append('countries', JSON.stringify(this.product.Countries));
    formData.append('PackagingId', JSON.stringify(packagings));

    this.productService.update(formData, this.product.id).subscribe(
      () => this.router.navigate(['products', 'list'])
    );
  }

}
