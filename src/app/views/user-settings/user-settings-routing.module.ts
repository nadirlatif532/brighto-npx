import { UserSettingsComponent } from "./user-settings/user-settings.component";
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
      path: '',
      component: UserSettingsComponent,
      data: {
          title: 'User-Settings'
      },
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSettingsRoutingModule {}