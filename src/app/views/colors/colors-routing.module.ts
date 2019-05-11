import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamilyComponent } from './family/family.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Colors'
    },
    children: [
      {
        path: '',
        redirectTo: 'family'
      },
      {
        path: 'family',
        component: FamilyComponent,
        data: {
          title: 'Family'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorsRoutingModule {}
