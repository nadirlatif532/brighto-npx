import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ColorPickerModule } from 'primeng/colorpicker';
import { KeyFilterModule } from 'primeng/keyfilter';
import { DropdownModule } from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';

@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    FormsModule,
    RadioButtonModule,
    OrdersRoutingModule,
    TableModule,
    DialogModule,
    DropdownModule,
    ButtonModule,
    ColorPickerModule,
    KeyFilterModule
  ]
})
export class OrdersModule { }
