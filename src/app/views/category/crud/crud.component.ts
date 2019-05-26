import { Component, OnInit } from '@angular/core';
import { Category } from '../../../core/models/category.interface';
import { CategoryService } from '../../../core/services/category.service';
import { ProjectService } from '../../../core/services/project.service';
import { Project } from '../../../core/models/project.interface';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  categories: Category[];
  selectedCategory: Category;
  projectTypes: Project[];
  category: Category;
  displayDialog: boolean = false;
  newCategory: boolean = false;
  image: any;

  constructor(
    private categoryService: CategoryService,
    private projectService: ProjectService    
    ) { }

  ngOnInit() {
    forkJoin(
      this.categoryService.getAll(),
      this.projectService.getAll()
    ).subscribe(
      next => {
        this.categories = next[0];
        this.projectTypes = next[1];
      }
    );
  }

  onRowSelect(event) {
    this.newCategory = false;
    this.category = {id: event.data.id, name: event.data.name, project: event.data.project , image: event.data.image};
    this.displayDialog = true;
  }

  myUploader(event) {
    this.category.image = event.files[0];
  }

  showDialogToAdd() {
    this.newCategory = true;
    this.category = {} as Category;
    this.displayDialog = true;
  }

  save() {
    let formData = new FormData();
    formData.append('image', this.category.image, this.category.image.name);
    formData.append('name', this.category.name);
    formData.append('ProjectTypeId', this.category.project.id.toString());

    if (this.newCategory) {
      this.categoryService.save(formData).subscribe(
        () => this.ngOnInit()
      );
    } else {
      this.categoryService.update(formData, this.category.id).subscribe(
        () => this.ngOnInit()
      );
    }
    this.category = null;
    this.displayDialog = false;
  }

  delete() {
    this.categoryService.delete(this.selectedCategory).subscribe(
      () => {
        this.displayDialog = false;
        this.ngOnInit();
      }
    )
  }

}
