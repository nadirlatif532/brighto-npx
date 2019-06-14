import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { ColorTrends } from '../models/color-trends.interface';

@Injectable({
  providedIn: 'root'
})
export class ColorTrendService {

  constructor(private api: ApiService) { }

  public getAll() {
    return this.api.get('u/color-trends/').pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }

  public findById(id: number) {
    let formData = new FormData();
    formData.append('id', id.toString());
    return this.api.postStringified(`u/color-trends/id`, formData).pipe(
      map((response: any) => {
        return response.data[0];
      })
    );
  }

  public save(trend: any) {
    return this.api.postStringified('admin/color-trends/create', trend);
  }

  public update(trend: any, id: number) {
    return this.api.putStringified(`admin/color-trends/${id}`, trend);
  }

  public delete(trend: ColorTrends) {
    return this.api.delete(`admin/color-trends/${trend.id}`);
  }
}
