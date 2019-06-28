import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FamilyComponent } from './family/family.component';

import { ColorsRoutingModule } from './colors-routing.module';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ShadeComponent } from './shade/shade.component';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { ListboxModule } from 'primeng/listbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MultiSelectModule } from 'primeng/multiselect';
import {EditorModule} from 'primeng/editor';

@NgModule({
  declarations: [FamilyComponent, ShadeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ColorsRoutingModule,
    TableModule,
    DialogModule,
    ButtonModule,
    KeyFilterModule,
    DropdownModule,
    CheckboxModule,
    ListboxModule,
    RadioButtonModule,
    MultiSelectModule,
    EditorModule
  ]
})
export class ColorsModule { }
