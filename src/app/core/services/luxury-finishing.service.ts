import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { LuxuryFinishing } from '../models/luxury-finishing.interface';

@Injectable({
  providedIn: 'root'
})
export class LuxuryFinishingService {

  constructor(private api: ApiService) { }

  public save(luxuryFinishing: any) {
    return this.api.postStringified('admin/luxury-finish/create', luxuryFinishing );
  }
  public getAll() {
    return this.api.get('u/luxury-finish').pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }
  public delete(luxuryFinishing: LuxuryFinishing) {
    return this.api.delete(`admin/luxury-finish/${luxuryFinishing.id}`);
  }
  public findById(id: number) {
    let formData = new FormData();
    formData.append('finish_id', id.toString());
    return this.api.postStringified('u/luxury-finish/specific', formData).pipe(
      map((response: any) => {
        return response.data[0];
      })
    );
  }
  public update(luxuryFinishing: any, id: number) {
    return this.api.putStringified(`admin/luxury-finish/${id}`, luxuryFinishing);
  }
}
