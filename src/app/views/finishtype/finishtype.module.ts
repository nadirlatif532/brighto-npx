import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinishComponent } from './finish/finish.component';
import { FinishTypeRoutingModule } from './finishtype-routing.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ColorPickerModule } from 'primeng/colorpicker';
import { KeyFilterModule } from 'primeng/keyfilter';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [FinishComponent],
  imports: [
    CommonModule,
    FinishTypeRoutingModule,
    FormsModule,
    TableModule,
    DialogModule,
    ButtonModule,
    ColorPickerModule,
    KeyFilterModule,
    FileUploadModule,
    DropdownModule,
    MultiSelectModule
  ]
})
export class FinishtypeModule { }
