import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService) { }

  public getAll() {
    return this.api.get('admin/user/').pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }
  getCurrentLoggedInUser(){
    return this.api.get('admin/user/specific').pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }
  updateUser(id: number,user:any){
    return this.api.putStringified(`a/user/${id}`,user);
  }
  public delete(user: any) {
    return this.api.delete(`admin/user/${user.id}`);
  }
}
