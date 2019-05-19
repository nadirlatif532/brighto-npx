import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurfaceComponent } from './components/surface/surface.component';
import { SurfacesRoutingModule } from './surfaces-routing.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ColorPickerModule } from 'primeng/colorpicker';
import { KeyFilterModule } from 'primeng/keyfilter';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [SurfaceComponent],
  imports: [
    CommonModule,
    FormsModule,
    SurfacesRoutingModule,
    TableModule,
    DialogModule,
    ButtonModule,
    ColorPickerModule,
    KeyFilterModule,
    FileUploadModule
  ]
})
export class SurfacesModule { }
