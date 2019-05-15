import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { Surface } from '../models/surface.interface';

@Injectable({
  providedIn: 'root'
})
export class SurfaceService {

  constructor(private api: ApiService) { }

  public getAll() {
    return this.api.get('admin/surface/').pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }

  public save(surface: Surface) {
    return this.api.post('admin/surface/create', surface );
  }

  public update(surface: Surface) {
    return this.api.put(`admin/surface/${surface.id}`, surface);
  }

  public delete(surface: Surface) {
    return this.api.delete(`admin/surface/${surface.id}`);
  }
}
