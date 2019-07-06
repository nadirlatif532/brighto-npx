import { Component, OnInit } from '@angular/core';
import { FamilyService } from '../../../core/services/family.service';
import { Family } from '../../../core/models/family.interface';
import { ShadesFilterService } from '../../../core/services/shades-filter.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: []
})
export class FamilyComponent implements OnInit {

  families: Family[];
  selectedFamily: Family;
  loading: boolean = true;
  family: Family;
  color: any;
  displayDialog: boolean = false;
  newFamily: boolean = false;
  dropdown:any = [];

  constructor(
    private familyService: FamilyService,
    private shadesService: ShadesFilterService) {}

  ngOnInit() {
    this.loading = true;
    forkJoin(
    this.familyService.getAll(),
    this.shadesService.getAll()
    ).subscribe(
      next => {
        this.families = next[0],
        this.dropdown = next[1].map(item => { 
          return { label: item.name, value:{id: item.id, name: item.name}}
        }
      )},
      () => {},
      () => this.loading = false
    );
  }

  showDialogToAdd() {
    this.newFamily = true;
    this.family = {} as Family;
    this.displayDialog = true;
  }

  delete() {
    this.loading = true;
    this.familyService.delete(this.selectedFamily).subscribe(
      () => {
        this.displayDialog = false;
        this.ngOnInit();
      }
    );
  }

  save() {
    this.loading = true;
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
    let fam: Family = {id: family.id, sequence: family.sequence, name: family.name, r: family.color.r, g: family.color.g, b: family.color.b, ShadeFilter:family.ShadeFilter};
    return fam;
  }

}
