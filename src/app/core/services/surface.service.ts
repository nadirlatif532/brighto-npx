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
    return this.api.get('u/surface/').pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }

  public save(surface: any) {
    return this.api.postStringified('admin/surface/create', surface );
  }

  public update(surface: any, id: number) {
    return this.api.putStringified(`admin/surface/${id}`, surface);
  }

  public delete(surface: Surface) {
    return this.api.delete(`admin/surface/${surface.id}`);
  }
}
