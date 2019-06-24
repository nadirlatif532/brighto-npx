import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListUserComponent } from './list-user/list-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'User'
    },
    children: [
      {
        path: '',
        redirectTo: 'list'
      },
      {
        path: 'list',
        component: ListUserComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'add',
        component: CreateUserComponent,
      },
      {
        path: 'edit/:id',
        component: EditUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}