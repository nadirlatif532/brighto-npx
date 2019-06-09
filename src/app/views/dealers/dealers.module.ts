import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealerComponent } from './dealer/dealer.component';
import { DealersRoutingModule } from './dealers-routing.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ColorPickerModule } from 'primeng/colorpicker';
import { KeyFilterModule } from 'primeng/keyfilter';
import { DropdownModule } from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';

@NgModule({
  declarations: [DealerComponent],
  imports: [
    CommonModule,
    FormsModule,
    RadioButtonModule,
    DealersRoutingModule,
    TableModule,
    DialogModule,
    DropdownModule,
    ButtonModule,
    ColorPickerModule,
    KeyFilterModule
  ]
})
export class DealersModule { }
