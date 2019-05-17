import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { Finish } from '../models/finish.interface';

@Injectable({
  providedIn: 'root'
})
export class FinishService {

  constructor(private api: ApiService) { }

  public getAll() {
    return this.api.get('admin/finish-type/').pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }

  public save(finish: Finish) {
    return this.api.post('admin/finish-type/create', finish );
  }

  public update(finish: Finish) {
    return this.api.put(`admin/finish-type/${finish.id}`, finish);
  }

  public delete(finish: Finish) {
    return this.api.delete(`admin/finish-type/${finish.id}`);
  }
}
