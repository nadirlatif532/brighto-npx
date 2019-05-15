import { Component, OnInit } from '@angular/core';
import {Project} from '../../../../core/models/project.interface';
import {ProjectService} from '../../../../core/services/project.service'
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

    displayDialog: boolean;
    cols: any[];
    projects: Project[];
    project: Project;
    newProject: boolean = false;
    selectedProject: Project;
  
    constructor(private projectService: ProjectService) { }
  
    ngOnInit() {
        this.projectService.getAll().subscribe(
          next => {
            this.projects = next;
          }
        );
    }
  
    showDialogToAdd() {
        this.newProject = true;
        this.project = {} as Project;
        this.displayDialog = true;
    }
  
    save() {
      if(this.newProject) {
        this.projectService.save(this.project).subscribe(
          () => this.ngOnInit()
        )
      } else {
        this.projectService.update(this.project).subscribe(
          () => this.ngOnInit()
        )
      }
      this.project = null;
      this.displayDialog = false;
    }
  
    delete() {
      this.projectService.delete(this.selectedProject).subscribe(
        () => {
          this.displayDialog = false;
          this.ngOnInit();
        }
      )
    }
  
    onRowSelect(event) {
        this.newProject = false;
        this.project = this.cloneProject(event.data);
        this.displayDialog = true;
    }
  
    cloneProject(project) {
      let count: Project = {id: project.id, name: project.name, image:project.image};
      return count;
    }
  }
  

