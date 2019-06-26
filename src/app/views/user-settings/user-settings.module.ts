import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserSettingsRoutingModule } from './user-settings-routing.module';
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
import {TabViewModule} from 'primeng/tabview';

@NgModule({
  declarations: [UserSettingsComponent],
  imports: [
    CommonModule,
    UserSettingsRoutingModule,
    FormsModule,
    DropdownModule,
    KeyFilterModule,
    ListboxModule,
    CheckboxModule,
    ButtonModule,
    DataViewModule,
    InputTextModule,
    ConfirmDialogModule,
    PanelModule,
    TabViewModule
  ]
})
export class UserSettingsModule { }
