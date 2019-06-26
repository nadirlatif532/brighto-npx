import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPalletComponent } from './list-pallet/list-pallet.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PalletsRoutingModule {}
