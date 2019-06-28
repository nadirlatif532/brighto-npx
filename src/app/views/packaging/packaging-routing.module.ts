import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackagingComponent } from './packaging/packaging.component';

const routes: Routes = [
  {
      path: '',
      component: PackagingComponent,
      data: {
          title: 'Packaging'
      },
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  })
  export class PackagingRoutingModule {}