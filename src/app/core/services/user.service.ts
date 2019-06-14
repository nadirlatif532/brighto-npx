import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService) { }

  public getAll() {
    return this.api.get('a/user/').pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }
}
