import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PalletsRoutingModule} from './pallets-routing.module';
import { CreatePalletComponent } from './create-pallet/create-pallet.component';
import { EditPalletComponent } from './edit-pallet/edit-pallet.component';
import { ListPalletComponent } from './list-pallet/list-pallet.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [CreatePalletComponent, EditPalletComponent, ListPalletComponent],
  imports: [
    CommonModule,
    PalletsRoutingModule,
    TableModule
  ]
})
export class PalletsModule { }
