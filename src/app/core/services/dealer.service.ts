import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { Dealer } from '../models/dealer.interface';

@Injectable({
  providedIn: 'root'
})
export class DealerService {

  constructor(private api: ApiService) { }

  public getAll() {
    return this.api.get('u/dealer/').pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }

  public save(dealer: Dealer) {
    return this.api.post('admin/dealer/create', dealer );
  }

  public update(dealer: Dealer) {
    return this.api.put(`admin/dealer/${dealer.id}`, dealer);
  }

  public delete(dealer: Dealer) {
    return this.api.delete(`admin/dealer/${dealer.id}`);
  }
}
