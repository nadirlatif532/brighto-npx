import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { Order } from '../models/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private api: ApiService) { }

  public getAll() {
    return this.api.get('u/order/').pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }

  public save(order: any) {
    return this.api.postStringified('admin/order/create', order );
  }

  public update(order: any, id: number) {
    return this.api.putStringified(`admin/order/${id}`, order);
  }

  public delete(order: Order) {
    return this.api.delete(`admin/order/${order.id}`);
  }
}
