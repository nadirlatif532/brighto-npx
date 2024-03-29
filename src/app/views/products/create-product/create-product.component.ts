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
import { PackagingService } from '../../../core/services/packaging.service';
import { Packagings } from '../../../core/models/packaging.interface';

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
  packagings: Packagings[];

  imageErr: boolean = false;
  coverImageErr: boolean = false;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private countryService: CountryService,
    private projectService: ProjectService,
    private surfaceService: SurfaceService,
    private finishService: FinishService,
    private packagingService: PackagingService,
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
    var tags = String(this.product.description)
    var description = tags.replace(/<[^>]*>/g, '')
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
    formData.append('description',description);
    formData.append('countries', JSON.stringify(this.product.Countries));
    formData.append('PackagingId', JSON.stringify(packagings));
    formData.append('sequence',this.product.sequence.toString())

    this.productService.save(formData).subscribe(
      () => this.router.navigate(['products', 'list'])
    );
  }

}
