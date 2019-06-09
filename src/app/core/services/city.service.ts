import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { City } from '../models/city.interface';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private api: ApiService) { }

  public getAll() {
    return this.api.get('u/city/').pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }

  public save(city: any) {
    return this.api.postStringified('admin/city/create', city );
  }

  public update(city: any, id: number) {
    return this.api.putStringified(`admin/city/${id}`, city);
  }

  public delete(city: City) {
    return this.api.delete(`admin/city/${city.id}`);
  }
}
