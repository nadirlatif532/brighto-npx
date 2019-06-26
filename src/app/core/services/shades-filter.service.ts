import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { ShadesFilter } from '../models/shades-filter.interface';

@Injectable({
  providedIn: 'root'
})

export class ShadesFilterService {
  constructor(private api: ApiService) { }

  public getAll() {
    return this.api.get('u/shade-filter').pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }

  public save(shade: ShadesFilter) {
    const name = {name:shade['name']};
    return this.api.post('admin/shade-filter/create', name );
  }

  public update(shade: ShadesFilter) {
    return this.api.put(`admin/shade-filter/${shade.id}`, shade);
  }

  public delete(shade: ShadesFilter) {
    return this.api.delete(`admin/shade-filter/${shade.id}`);
  }
}