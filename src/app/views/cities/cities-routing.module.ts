import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './city/city.component';

const routes: Routes = [
    {
        path: '',
        component:CityComponent,
        data: {
            title: 'Cities'
        },
    }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRoutingModule {}
