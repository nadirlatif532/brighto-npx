import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityComponent } from './city/city.component';
import {CityRoutingModule} from './cities-routing.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ColorPickerModule } from 'primeng/colorpicker';
import { KeyFilterModule } from 'primeng/keyfilter';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [CityComponent],
  imports: [
    CommonModule,
    CityRoutingModule,
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    ButtonModule,
    ColorPickerModule,
    KeyFilterModule,
    DropdownModule
  ]
})
export class CitiesModule { }
