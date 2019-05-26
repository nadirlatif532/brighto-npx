import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrudComponent } from './crud/crud.component';
import { CategoryRoutingModule } from './category-routing.module';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [CrudComponent],
  imports: [
    CommonModule,
    FormsModule,
    CategoryRoutingModule,
    TableModule,
    DialogModule,
    ButtonModule,
    FileUploadModule,
    DropdownModule
  ]
})
export class CategoryModule { }
