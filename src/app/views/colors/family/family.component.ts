import { Component, OnInit } from '@angular/core';
import { FamilyService } from '../../../core/services/family.service';
import { Family } from '../../../core/models/family.interface';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {

  families: Family[];
  selectedFamily: Family;
  family: Family;
  color: any;
  displayDialog: boolean = false;
  newFamily: boolean = false;

  constructor(private familyService: FamilyService) {}

  ngOnInit() {
    this.familyService.getAll().subscribe(
      next => this.families = next
    );

  }

  showDialogToAdd() {
    this.newFamily = true;
    this.family = {} as Family;
    this.displayDialog = true;
  }

  delete() {
    this.familyService.delete(this.selectedFamily).subscribe(
      () => {
        this.displayDialog = false;
        this.ngOnInit();
      }
    );
  }

  save() {
    if (this.newFamily) {
      this.familyService.save(this.family).subscribe(
        () => this.ngOnInit()
      );
    } else {
      this.familyService.update(this.family).subscribe(
        () => this.ngOnInit()
      );
    }
    this.family = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newFamily = false;
    this.family = this.cloneFamily(event.data);
    this.displayDialog = true;
  }

  cloneFamily(family) {
    let fam: Family = {id: family.id, name: family.name, r: family.r, g: family.g, b: family.b};
    return fam;
  }

}
