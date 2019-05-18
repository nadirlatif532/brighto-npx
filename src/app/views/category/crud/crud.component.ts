import { Component, OnInit } from '@angular/core';
import { Category } from '../../../core/models/category.interface';
import { CategoryService } from '../../../core/services/category.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  categories: Category[];
  selectedCategory: Category;
  category: Category;
  displayDialog: boolean = false;
  newCategory: boolean = false;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAll().subscribe(next => this.categories = next);
  }

  onRowSelect(event) {
    this.newCategory = false;
    this.category = {id: event.data.id, name: event.data.name, image: "https://images.unsplash.com/photo-1558122104-355edad709f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"};
    this.displayDialog = true;
  }

  showDialogToAdd() {
    this.newCategory = true;
    this.category = {} as Category;
    this.displayDialog = true;
  }

  save() {
    if (this.newCategory) {
      this.category.image = "https://images.unsplash.com/photo-1558122104-355edad709f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80";
      this.categoryService.save(this.category).subscribe(
        () => this.ngOnInit()
      );
    } else {
      this.categoryService.update(this.category).subscribe(
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
