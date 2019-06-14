import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { Family } from '../models/family.interface';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  constructor(private api: ApiService) { }

  public getAll() {
    return this.api.get('u/family').pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }

  public save(family: Family) {
    return this.api.post('admin/family/create', family);
  }

  public update(family: Family) {
    return this.api.put(`admin/family/${family.id}`, family);
  }

  public delete(family: Family) {
    return this.api.delete(`admin/family/${family.id}`);
  }
}
