import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackagingComponent } from './packaging/packaging.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { PackagingRoutingModule } from './packaging-routing.module';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [PackagingComponent],
  imports: [
    CommonModule,
    FormsModule,
    PackagingRoutingModule,
    TableModule,
    DialogModule,
    ButtonModule,
    FileUploadModule
  ]
})
export class PackagingModule { }
