import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFinishingComponent } from './create-finishing/create-finishing.component';
import { EditFinishingComponent } from './edit-finishing/edit-finishing.component';
import { ListFinishingComponent } from './list-finishing/list-finishing.component';
import { LuxuryFinishingRoutingModule } from './luxury-finishing-routing.module';
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
import { ConfirmationService } from 'primeng/api';
import { LuxuryFinishingService } from '../../core/services/luxury-finishing.service';
import {EditorModule} from 'primeng/editor';

@NgModule({
  declarations: [CreateFinishingComponent, EditFinishingComponent, ListFinishingComponent],
  imports: [
    CommonModule,
    FormsModule,
    LuxuryFinishingRoutingModule,
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
    EditorModule
  ],
  providers: [
    ConfirmationService,
    LuxuryFinishingService
  ]
})
export class LuxuryFinishingModule { }
