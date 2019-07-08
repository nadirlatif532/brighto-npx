import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ListboxModule } from 'primeng/listbox';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import {InputSwitchModule} from 'primeng/inputswitch';


@NgModule({
  declarations: [CreateUserComponent, EditUserComponent, ListUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    ListboxModule,
    CheckboxModule,
    RadioButtonModule,
    TableModule,
    DialogModule,
    ColorPickerModule,
    KeyFilterModule,
    DropdownModule,
    ButtonModule,
    DataViewModule,
    InputTextModule,
    ConfirmDialogModule,
    PanelModule,
    InputSwitchModule
  ]
})
export class UserModule { }
