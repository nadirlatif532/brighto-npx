import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DealerComponent } from './dealer/dealer.component';

const routes: Routes = [
    {
        path: '',
        component: DealerComponent,
        data: {
            title: 'Dealers'
        },
    }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealersRoutingModule {}
