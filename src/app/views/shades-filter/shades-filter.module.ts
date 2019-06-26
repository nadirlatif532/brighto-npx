import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShadesComponent } from './shades/shades.component';
import { ShadesRoutingModule } from './shades-routing.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ColorPickerModule } from 'primeng/colorpicker';
import { KeyFilterModule } from 'primeng/keyfilter';

@NgModule({
  declarations: [ShadesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ShadesRoutingModule,
    TableModule,
    DialogModule,
    ButtonModule,
    ColorPickerModule,
    KeyFilterModule,
  ]
})
export class ShadesFilterModule { }
