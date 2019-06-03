import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { Pallete } from '../models/pallet.interface';

@Injectable({
  providedIn: 'root'
})
export class PalleteService {

  constructor(private api: ApiService) { }

  public getAll() {
    return this.api.get('u/pallet/').pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }

  public save(pallete: Pallete) {
    return this.api.post('u/pallet/create', pallete );
  }

  public update(pallete: Pallete) {
    return this.api.put(`admin/pallet/${pallete.id}`, pallete);
  }

  public delete(pallete: Pallete) {
    return this.api.delete(`admin/pallet/${pallete.id}`);
  }
}
