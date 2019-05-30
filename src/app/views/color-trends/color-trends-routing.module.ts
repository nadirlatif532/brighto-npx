import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorTrendsComponent } from './list-color-trends/color-trends.component';
import { AddColorTrendsComponent } from './add-color-trends/add-color-trends.component';
import { EditColorTrendsComponent } from './edit-color-trends/edit-color-trends.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Color Trends',
        },
            children: [
                {
                  path: '',
                  redirectTo: 'list'
                },
                {
                  path: 'list',
                  component: ColorTrendsComponent,
                  data: {
                    title: 'List'
                  }
                },
                {
                  path: 'add',
                  component: AddColorTrendsComponent,
                },
                {
                  path: 'edit/:id',
                  component: EditColorTrendsComponent
                }
              ]
        },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorTrendsRoutingModule {}
