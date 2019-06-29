import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private api: ApiService) { }

  public getAll() {
    return this.api.get('u/products').pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }

  public findById(id: number) {
    let formData = new FormData();
    formData.append('product_id', id.toString());
    return this.api.postStringified('u/product/id', formData).pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }

  public save(product: any) {
    return this.api.postStringified('admin/products/create', product);
  }

  public update(product: any, id: number) {
    return this.api.putStringified(`admin/products/${id}`, product);
  }

  public delete(product: Product) {
    return this.api.delete(`admin/products/${product.id}`);
  }
}
