import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FamilyComponent } from './family/family.component';

import { ColorsRoutingModule } from './colors-routing.module';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { KeyFilterModule } from 'primeng/keyfilter';

@NgModule({
  declarations: [FamilyComponent],
  imports: [
    CommonModule,
    FormsModule,
    ColorsRoutingModule,
    TableModule,
    DialogModule,
    ButtonModule,
    KeyFilterModule
  ]
})
export class ColorsModule { }
