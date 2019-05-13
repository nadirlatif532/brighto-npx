import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Products'
    },
    children: [
      {
        path: '',
        redirectTo: 'list'
      },
      {
        path: 'list',
        component: ListProductsComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'add',
        component: CreateProductComponent,
      },
      {
        path: 'edit/:id',
        component: EditProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
