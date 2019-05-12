import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrudComponent } from './crud/crud.component';
import { CategoryRoutingModule } from './category-routing.module';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [CrudComponent],
  imports: [
    CommonModule,
    FormsModule,
    CategoryRoutingModule,
    TableModule,
    DialogModule,
    ButtonModule
  ]
})
export class CategoryModule { }
