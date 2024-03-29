import { Component, OnInit } from '@angular/core';
import {Surface} from '../../../../core/models/surface.interface';
import { SurfaceService } from '../../../../core/services/surface.service';
import { CategoryService } from '../../../../core/services/category.service';
import { forkJoin } from 'rxjs';
import { Category } from '../../../../core/models/category.interface';
import { SharedService } from '../../../../shared/services/shared.service';

@Component({
  selector: 'app-surface',
  templateUrl: './surface.component.html',
  styleUrls: ['./surface.component.scss']
})
export class SurfaceComponent implements OnInit {

  surfaces: Surface[];
  surface: Surface;
  categories: Category[];
  displayDialog: boolean = false;
  newSurface: boolean = false;
  selectedSurface: Surface;
  loading: boolean = true;
  baseUrl: string;

  constructor(
    private surfaceService: SurfaceService,
    private categoryService: CategoryService,
    private sharedService: SharedService) { }

  ngOnInit() {
    forkJoin(
      this.surfaceService.getAll(),
      this.categoryService.getAll()
    ).subscribe(
      next => {
        this.surfaces = next[0];
        this.categories = next[1];
        this.baseUrl = this.sharedService.baseUrl;
      },
      () => {},
      () => this.loading = false
    );
  }

  myUploader(event) {
    this.surface.image = event.files[0];
  }

  showDialogToAdd() {
    this.newSurface = true;
    this.surface = {} as Surface;
    this.displayDialog = true;
  }

  save() {
    let formData = new FormData();
    formData.append('image', this.surface.image);
    formData.append('name', this.surface.name);
    let arr = [];
    for (let category of this.surface.Categories) arr.push(category.id);
    formData.append('CategoryId', JSON.stringify(arr));
    this.loading = true;
    if(this.newSurface) {
      this.surfaceService.save(formData).subscribe(
        () => this.ngOnInit()
      );
    } else {
      this.surfaceService.update(formData, this.surface.id).subscribe(
        () => this.ngOnInit()
      );
    }

    this.surface = null;
    this.displayDialog = false;
  }

  delete() {
    this.loading = true;
    this.surfaceService.delete(this.selectedSurface).subscribe(
      () => {
        this.displayDialog = false;
        this.ngOnInit();
      }
    )
  }

  onRowSelect(event) {
      this.newSurface = false;
      this.surface = this.cloneSurface(event.data);
      this.displayDialog = true;
  }

  cloneSurface(surface) {
    let count: Surface = {id: surface.id, name: surface.name, Categories: surface.Categories, image: surface.image};
    return count;
  }
}