import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { Surface } from '../models/surface.interface';
import { Project } from '../models/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private api: ApiService) { }

  public getAll() {
    return this.api.get('admin/project-type/').pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }

  public save(project: any) {
    return this.api.postStringified('admin/project-type/create', project );
  }

  public update(project: Surface) {
    return this.api.putStringified(`admin/project-type/${project.id}`, project);
  }

  public delete(project: Project) {
    return this.api.delete(`admin/project-type/${project.id}`);
  }
}
