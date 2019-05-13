import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { Category } from '../models/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private api: ApiService) { }

  public getAll() {
    return this.api.get('admin/category').pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }

  public save(category: Category) {
    return this.api.post('admin/category/create', category);
  }

  public update(category: Category) {
    return this.api.put(`admin/category/${category.id}`, category);
  }

  public delete(category: Category) {
    return this.api.delete(`admin/category/${category.id}`);
  }
}