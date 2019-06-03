import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PalletsRoutingModule} from './pallets-routing.module';
import { CreatePalletComponent } from './create-pallet/create-pallet.component';
import { EditPalletComponent } from './edit-pallet/edit-pallet.component';
import { ListPalletComponent } from './list-pallet/list-pallet.component';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ColorPickerModule } from 'primeng/colorpicker';
import { KeyFilterModule } from 'primeng/keyfilter';
import { DropdownModule } from 'primeng/dropdown';
import { ListboxModule } from 'primeng/listbox';
import { DataViewModule } from 'primeng/dataview';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [CreatePalletComponent, EditPalletComponent, ListPalletComponent],
  imports: [
    CommonModule,
    PalletsRoutingModule,
    TableModule,
    FormsModule,
    TableModule,
    DialogModule,
    ButtonModule,
    ColorPickerModule,
    KeyFilterModule,
    DropdownModule,
    KeyFilterModule,
    ButtonModule,
    DataViewModule,
    InputTextModule,
    ConfirmDialogModule,
    PanelModule,
  ]
})
export class PalletsModule { }
