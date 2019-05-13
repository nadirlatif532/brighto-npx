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
    return this.api.get('u/products/' + id).pipe(
      map((response: any) => {
        return response.data[0];
      })
    );
  }

  public save(product: Product) {
    return this.api.post('admin/products/create', product);
  }

  public update(product: Product) {
    return this.api.put(`admin/products/${product.id}`, product);
  }

  public delete(product: Product) {
    return this.api.delete(`admin/products/${product.id}`);
  }
}
