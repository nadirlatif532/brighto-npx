import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { ListProductsComponent } from './list-products/list-products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DropdownModule } from 'primeng/dropdown';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ListboxModule } from 'primeng/listbox';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { PanelModule } from 'primeng/panel';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FileUploadModule } from 'primeng/fileupload';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {EditorModule} from 'primeng/editor';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [ListProductsComponent, CreateProductComponent, EditProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
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
    ProgressSpinnerModule,
    EditorModule,
    DialogModule,
    TableModule,
  ],
  providers: [
    ConfirmationService
  ]
})
export class ProductsModule { }
