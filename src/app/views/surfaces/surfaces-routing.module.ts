import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurfaceComponent } from './components/surface/surface.component';

const routes: Routes = [
    {
        path: '',
        component: SurfaceComponent,
        data: {
            title: 'Surface'
        },
    }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurfacesRoutingModule {}
