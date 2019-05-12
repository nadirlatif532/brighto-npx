import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CrudComponent } from "./crud/crud.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Category"
    },
    children: [
      {
        path: "",
        component: CrudComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {}
