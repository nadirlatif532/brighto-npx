import { Component, OnInit } from '@angular/core';
import { Project } from '../../../../core/models/project.interface';
import { ProjectService } from '../../../../core/services/project.service'
import { SharedService } from '../../../../shared/services/shared.service';

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
  loading: boolean = true;
  baseUrl: string;
  
  constructor(
    private projectService: ProjectService,
    private sharedService: SharedService) { }

  ngOnInit() {
    this.projectService.getAll().subscribe(
      next => {
        this.projects = next,
        this.baseUrl = this.sharedService.baseUrl;
      },
      () => {},
      () => this.loading = false
    );
  }

  onRowSelect(event) {
    this.newProject = false;
    this.project = this.cloneProject(event.data);
    this.displayDialog = true;
  }
  
  showDialogToAdd() {
    this.newProject = true;
    this.project = {} as Project;
    this.displayDialog = true;
  }
  
  save() {
    let formData = new FormData();
    formData.append('image', this.project.image);
    formData.append('name', this.project.name);

    this.loading = true;
    if (this.newProject) {
      this.projectService.save(formData).subscribe(
        () => this.ngOnInit()
      );
    } else {
      this.projectService.update(formData, this.project.id).subscribe(
        () => this.ngOnInit()
      );
    }
    this.project = null;
    this.displayDialog = false;
  }

  myUploader(event) {
    this.project.image = event.files[0];
  }
  
  delete() {
    this.loading = true;
    this.projectService.delete(this.selectedProject).subscribe(
      () => {
        this.displayDialog = false;
        this.ngOnInit();
      }
    )
  }
  
  cloneProject(project) {
    let count: Project = {id: project.id, name: project.name, image: project.image};
    return count;
  }
}