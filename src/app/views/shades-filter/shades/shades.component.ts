import { Component, OnInit } from '@angular/core';
import { ShadesFilter } from '../../../core/models/shades-filter.interface';
import { ShadesFilterService } from '../../../core/services/shades-filter.service';

@Component({
  selector: 'app-shades',
  templateUrl: './shades.component.html',
  styleUrls: ['./shades.component.scss']
})
export class ShadesComponent implements OnInit {

  displayDialog: boolean;
  shade:ShadesFilter;
  shades:ShadesFilter[];
  newShade: boolean = false;
  selectedShade: ShadesFilter;
  loading: boolean = true;

  constructor(private shadesFilterService:ShadesFilterService) { }

  ngOnInit() {
    this.shadesFilterService.getAll().subscribe(
      next => this.shades = next,
      () => {},
      () => this.loading = false
    );
  }
  save() {
    this.loading = true;
    if(this.newShade) {
      this.shadesFilterService.save(this.shade).subscribe(
        () => this.ngOnInit()
      )
    } else {
      this.shadesFilterService.update(this.shade).subscribe(
        () => this.ngOnInit()
      )
    }
    this.shade = null;
    this.displayDialog = false;
  }
  delete() {
    this.loading = true;
    this.shadesFilterService.delete(this.selectedShade).subscribe(
      () => {
        this.displayDialog = false;
        this.ngOnInit();
      }
    )
  }

  showDialogToAdd() {
    this.newShade = true;
    this.shade = {} as ShadesFilter;
    this.displayDialog = true;
  }
  onRowSelect(event) {
    this.newShade = false;
    this.shade = this.cloneShade(event.data);
    this.displayDialog = true;
  }
  cloneShade(shade) {
    let count: ShadesFilter = {id: shade.id, name: shade.name};
    return count;
  }
}
