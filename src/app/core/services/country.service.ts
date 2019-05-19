import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { Country } from '../models/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private api: ApiService) { }

  public getAll() {
    return this.api.get('u/country/').pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }

  public save(country: Country) {
    const name = {name:country['name']};
    return this.api.post('admin/country/create', name );
  }

  public update(country: Country) {
    return this.api.put(`admin/country/${country.id}`, country);
  }

  public delete(country: Country) {
    return this.api.delete(`admin/country/${country.id}`);
  }
}
