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
    return this.api.get('u/category').pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }

  public save(category: any) {
    return this.api.postStringified('admin/category/create', category);
  }

  public update(category: any, id: number) {
    return this.api.putStringified(`admin/category/${id}`, category);
  }

  public delete(category: Category) {
    return this.api.delete(`admin/category/${category.id}`);
  }
}
