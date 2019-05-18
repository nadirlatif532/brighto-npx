import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinishComponent } from './finish/finish.component';
import {FinishTypeRoutingModule} from './finishtype-routing.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ColorPickerModule } from 'primeng/colorpicker';
import { KeyFilterModule } from 'primeng/keyfilter';

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
  ]
})
export class FinishtypeModule { }
