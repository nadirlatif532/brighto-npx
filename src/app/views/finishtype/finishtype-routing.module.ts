import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinishComponent } from './finish/finish.component';

const routes: Routes = [
    {
        path: '',
        component: FinishComponent,
        data: {
            title: 'Finish Type'
        },
    }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinishTypeRoutingModule {}
