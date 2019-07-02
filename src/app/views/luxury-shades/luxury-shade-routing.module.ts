import { ListLuxuryShadeComponent } from "./list-luxury-shade/list-luxury-shade.component";
import { CreateLuxuryShadeComponent } from './create-luxury-shade/create-luxury-shade.component';
import { EditLuxuryShadeComponent } from './edit-luxury-shade/edit-luxury-shade.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Luxury-Shades'
    },
    children: [
      {
        path: '',
        redirectTo: 'list'
      },
      {
        path: 'list',
        component: ListLuxuryShadeComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'add',
        component: CreateLuxuryShadeComponent,
      },
      {
        path: 'edit/:id',
        component: EditLuxuryShadeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LuxuryShadesRoutingModule {}