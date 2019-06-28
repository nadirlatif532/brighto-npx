import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { Project } from '../models/project.interface';

@Injectable({
  providedIn: 'root'
})
export class PackagingService {

  constructor(private api: ApiService) { }

  public getAll() {
    return this.api.get('u/packaging/').pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }

  public save(packaging: any) {
    return this.api.postStringified('admin/packaging/create', packaging );
  }

  public update(packaging: any, id: number) {
    return this.api.putStringified(`admin/packaging/${id}`, packaging);
  }

  public delete(packaging: Project) {
    return this.api.delete(`admin/packaging/${packaging.id}`);
  }
}
