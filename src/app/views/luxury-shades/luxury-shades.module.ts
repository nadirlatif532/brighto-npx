import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateLuxuryShadeComponent } from './create-luxury-shade/create-luxury-shade.component';
import { EditLuxuryShadeComponent } from './edit-luxury-shade/edit-luxury-shade.component';
import { ListLuxuryShadeComponent } from './list-luxury-shade/list-luxury-shade.component';
import { LuxuryShadesRoutingModule } from './luxury-shade-routing.module';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ListboxModule } from 'primeng/listbox';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PanelModule } from 'primeng/panel';
import { FileUploadModule } from 'primeng/fileupload';
import { EditorModule } from 'primeng/editor';
import { ConfirmationService } from 'primeng/api';
import { LuxuryShadesService } from '../../core/services/luxury-shades.service';

@NgModule({
  declarations: [CreateLuxuryShadeComponent, EditLuxuryShadeComponent, ListLuxuryShadeComponent],
  imports: [
    CommonModule,
    FormsModule,
    LuxuryShadesRoutingModule,
    DropdownModule,
    KeyFilterModule,
    ListboxModule,
    CheckboxModule,
    ButtonModule,
    DataViewModule,
    InputTextModule,
    ConfirmDialogModule,
    PanelModule,
    FileUploadModule,
    EditorModule,
  ],
  providers: [
    ConfirmationService,
    LuxuryShadesService
  ]
})
export class LuxuryShadesModule { }
