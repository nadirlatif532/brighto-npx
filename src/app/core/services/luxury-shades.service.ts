import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { LuxuryShade } from '../models/luxury-shades.interface';

@Injectable({
  providedIn: 'root'
})
export class LuxuryShadesService {

  constructor(private api: ApiService) { }
  
  public save(luxuryShade: any) {
    return this.api.postStringified('admin/luxury-shade/create', luxuryShade );
  }
  public getAll() {
    return this.api.get('u/luxury-shade').pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }
  public delete(luxuryShade: LuxuryShade) {
    return this.api.delete(`admin/luxury-shade/${luxuryShade.id}`);
  }
  public findById(id: number) {
    let formData = new FormData();
    formData.append('shade_id', id.toString());
    return this.api.postStringified('u/luxury-shade/specific', formData).pipe(
      map((response: any) => {
        return response.data[0];
      })
    );
  }
  public update(luxuryShade: any, id: number) {
    return this.api.putStringified(`admin/luxury-shade/${id}`, luxuryShade);
  }
}