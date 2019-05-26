import { Component, OnInit } from '@angular/core';
import { Finish } from '../../../core/models/finish.interface'
import { FinishService } from '../../../core/services/finish.service';
import { SurfaceService } from '../../../core/services/surface.service';
import { forkJoin } from 'rxjs';
import { Surface } from '../../../core/models/surface.interface';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss']
})
export class FinishComponent implements OnInit {

  finishes: Finish[];
  selectedFinish: Finish;
  surfaces: Surface[];
  finish: Finish;
  displayDialog: boolean = false;
  newFinish: boolean = false;
  image: any;

  constructor(
    private finishService: FinishService,
    private surfaceService: SurfaceService) { }

  ngOnInit() {
    forkJoin(
      this.finishService.getAll(),
      this.surfaceService.getAll()
    ).subscribe(
      next => {
        this.finishes = next[0];
        this.surfaces = next[1];
      }
    );
    this.finishService.getAll().subscribe(next => this.finishes = next);
  }

  onRowSelect(event) {
    this.newFinish = false;
    this.finish = this.cloneProject(event.data);
    this.displayDialog = true;
  }

  myUploader(event) {
    this.finish.image = event.files[0];
  }

  showDialogToAdd() {
    this.newFinish = true;
    this.finish = {} as Finish;
    this.displayDialog = true;
  }

  save() {
    let formData = new FormData();
    formData.append('image', this.finish.image, this.finish.image.name);
    formData.append('name', this.finish.name);
    formData.append('SurfaceId', this.finish.surface.id.toString());

    if (this.newFinish) {
      this.finishService.save(formData).subscribe(
        () => this.ngOnInit()
      );
    } else {
      this.finishService.update(formData, this.finish.id).subscribe(
        () => this.ngOnInit()
      );
    }

    this.finish = null;
    this.displayDialog = false;
  }

  delete() {
    this.finishService.delete(this.selectedFinish).subscribe(
      () => {
        this.displayDialog = false;
        this.ngOnInit();
      }
    )
  }
 
  cloneProject(finish) {
    let count: Finish = {id: finish.id, name: finish.name, surface: finish.surface, image: finish.image};
    return count;
  }
}