import { Component, OnInit } from '@angular/core';
import {Surface} from '../../../../core/models/surface.interface';
import { SurfaceService } from '../../../../core/services/surface.service';
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

  constructor(private surfaceService: SurfaceService) { }

  ngOnInit() {
      this.surfaceService.getAll().subscribe(
        next => {
          this.surfaces = next;
        }
      );
  }

  showDialogToAdd() {
      this.newSurface = true;
      this.surface = {} as Surface;
      this.displayDialog = true;
  }

  save() {
    if(this.newSurface) {
      this.surfaceService.save(this.surface).subscribe(
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
