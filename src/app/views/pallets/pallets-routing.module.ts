import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPalletComponent } from './list-pallet/list-pallet.component';
import { CreatePalletComponent } from './create-pallet/create-pallet.component';
import { EditPalletComponent } from './edit-pallet/edit-pallet.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Pallets'
    },
    children: [
      {
        path: '',
        redirectTo: 'list'
      },
      {
        path: 'list',
        component: ListPalletComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'add',
        component: CreatePalletComponent,
      },
      {
        path: 'edit/:id',
        component: EditPalletComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PalletsRoutingModule {}
