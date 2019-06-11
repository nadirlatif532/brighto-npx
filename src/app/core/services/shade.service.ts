import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { Shade } from '../models/shade.interface';

@Injectable({
  providedIn: 'root'
})
export class ShadeService {

  constructor(private api: ApiService) { }

  public getAll() {
    return this.api.get('a/shades').pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }

  public save(shade: Shade) {
    return this.api.post('admin/shades/create', shade);
  }

  public update(shade: Shade) {
    return this.api.put(`admin/shades/${shade.id}`, shade);
  }

  public delete(shade: Shade) {
    return this.api.delete(`admin/shades/${shade.id}`);
  }
}
