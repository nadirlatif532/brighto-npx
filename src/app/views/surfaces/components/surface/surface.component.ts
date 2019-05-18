import { Component, OnInit } from '@angular/core';
import {Surface} from '../../../../core/models/surface.interface';
import { SurfaceService } from '../../../../core/services/surface.service';
import { SharedService } from '../../../../shared/services/shared.service';
@Component({
  selector: 'app-surface',
  templateUrl: './surface.component.html',
  styleUrls: ['./surface.component.scss']
})
export class SurfaceComponent implements OnInit {
  displayDialog: boolean;
  cols: any[];
  surfaces: Surface[];
  surface: Surface;
  newSurface: boolean = false;
  selectedSurface: Surface;

  constructor(private surfaceService: SurfaceService, private sharedService:SharedService) { }

  baseURL = this.sharedService.baseURL;
  ngOnInit() {
      this.surfaceService.getAll().subscribe(
        next => {
          this.surfaces = next;
        }
      );
  }

  handleFileInput(files: FileList) {
    this.surface.image = files.item(0);
  }

  showDialogToAdd() {
      this.newSurface = true;
      this.surface = {} as Surface;
      this.displayDialog = true;
  }

  save() {
    if(this.newSurface) {
      let formData = new FormData();
      formData.append('image',this.surface.image);
      formData.append('name',this.surface.name);
      this.surfaceService.save(formData).subscribe(
        () => this.ngOnInit()
      )
    } else {
      this.surfaceService.update(this.surface).subscribe(
        () => this.ngOnInit()
      )
    }
    this.surface = null;
    this.displayDialog = false;
  }

  delete() {
    this.surfaceService.delete(this.selectedSurface).subscribe(
      () => {
        this.displayDialog = false;
        this.ngOnInit();
      }
    )
  }

  onRowSelect(event) {
      this.newSurface = false;
      this.surface = this.cloneSurface(event.data);
      this.displayDialog = true;
  }

  cloneSurface(surface) {
    let count: Surface = {id: surface.id, name: surface.name, image:surface.image};
    return count;
  }
}
