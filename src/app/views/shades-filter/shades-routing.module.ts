import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShadesComponent } from './shades/shades.component';

const routes: Routes = [
  {
      path: '',
      component: ShadesComponent,
      data: {
          title: 'Shades'
      },
  }
]


@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ShadesRoutingModule {}