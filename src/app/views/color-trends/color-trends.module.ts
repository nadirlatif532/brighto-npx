import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorTrendsComponent } from './list-color-trends/color-trends.component';
import { ColorTrendsRoutingModule } from './color-trends-routing.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { KeyFilterModule } from 'primeng/keyfilter';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { ListboxModule } from 'primeng/listbox';
import {FileUploadModule} from 'primeng/fileupload';
import { AddColorTrendsComponent } from './add-color-trends/add-color-trends.component';
import { EditColorTrendsComponent } from './edit-color-trends/edit-color-trends.component';
import { DataViewModule } from 'primeng/dataview';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [ColorTrendsComponent, AddColorTrendsComponent, EditColorTrendsComponent],
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    ButtonModule,
    KeyFilterModule,
    DropdownModule,
    FileUploadModule,
    CheckboxModule,
    DataViewModule,
    ConfirmDialogModule,
    ListboxModule,
    ColorTrendsRoutingModule
  ],
  providers: [
    ConfirmationService
  ]
})
export class ColorTrendsModule { }
