import { Component, OnInit } from '@angular/core';
import {Surface} from '../../../../core/models/surface.interface';
import { SurfaceService } from '../../../../core/services/surface.service';
import { CategoryService } from '../../../../core/services/category.service';
import { forkJoin } from 'rxjs';
import { Category } from '../../../../core/models/category.interface';

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

  constructor(
    private surfaceService: SurfaceService,
    private categoryService: CategoryService) { }

  ngOnInit() {
    forkJoin(
      this.surfaceService.getAll(),
      this.categoryService.getAll()
    ).subscribe(
      next => {
        this.surfaces = next[0];
        this.categories = next[1];
      }
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
    formData.append('image', this.surface.image, this.surface.image.name);
    formData.append('name', this.surface.name);
    let arr = [];
    for (let category of this.surface.Categories) arr.push(category.id);
    formData.append('CategoryId', JSON.stringify(arr));

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
