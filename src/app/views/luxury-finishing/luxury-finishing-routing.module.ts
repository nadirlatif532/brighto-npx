import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListFinishingComponent } from "./list-finishing/list-finishing.component";
import { CreateFinishingComponent } from './create-finishing/create-finishing.component';
import { EditFinishingComponent } from './edit-finishing/edit-finishing.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Luxury-Finishing'
    },
    children: [
      {
        path: '',
        redirectTo: 'list'
      },
      {
        path: 'list',
        component: ListFinishingComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'add',
        component: CreateFinishingComponent,
      },
      {
        path: 'edit/:id',
        component: EditFinishingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LuxuryFinishingRoutingModule {}