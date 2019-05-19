import { Component, OnInit } from '@angular/core';
import {Finish} from '../../../core/models/finish.interface'
import { FinishService } from '../../../core/services/finish.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss']
})
export class FinishComponent implements OnInit {

  finishes: Finish[];
  selectedFinish: Finish;
  finish: Finish;
  displayDialog: boolean = false;
  newFinish: boolean = false;

  constructor(private finishService: FinishService) { }

  ngOnInit() {
    this.finishService.getAll().subscribe(next => this.finishes = next);
  }

  onRowSelect(event) {
    this.newFinish = false;
    this.finish = this.cloneProject(event);
    this.displayDialog = true;
  }

  showDialogToAdd() {
    this.newFinish = true;
    this.finish = {} as Finish;
    this.displayDialog = true;
  }
  handleFileInput(files: FileList) {
    this.finish.image = files.item(0);
  }
  save() {
    if (this.newFinish) {
      let formData = new FormData();
      formData.append('image',this.finish.image);
      formData.append('name',this.finish.name);
      this.finishService.save(formData).subscribe(
        () => this.ngOnInit()
      );
    } else {
      this.finishService.update(this.finish).subscribe(
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
 

cloneProject(project) {
  let count: Finish = {id: project.id, name: project.name, image:project.image};
  return count;
}


}
