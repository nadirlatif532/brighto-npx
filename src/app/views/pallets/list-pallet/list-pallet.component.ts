import { Component, OnInit } from '@angular/core';
import { Pallete } from '../../../core/models/pallet.interface';
import {PalleteService} from '../../../core/services/pallete.service';
import { ShadeService } from '../../../core/services/shade.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-list-pallet',
  templateUrl: './list-pallet.component.html',
  styleUrls: ['./list-pallet.component.scss']
})
export class ListPalletComponent implements OnInit {

  displayDialog: boolean;
  cols: any[];
  pallets: Pallete[];
  pallete: Pallete;
  newPallete: boolean = false;
  selectedPallete: Pallete;
  shades: any[];

  constructor(private palleteService: PalleteService,private shadesService: ShadeService) { }

  ngOnInit() {
    forkJoin(
      this.palleteService.getAll(),
      this.shadesService.getAll()
    ).subscribe(
      next => {
        this.pallets = next[0];
        this.shades = next[1];
      }
    );
  }

  showDialogToAdd() {
    this.newPallete = true;
    this.pallete = {} as Pallete;
    this.displayDialog = true;
  }

  save() {
    if(this.pallete['color_1']) {
      this.pallete['color1Id'] = this.pallete['color_1'].id;
      delete this.pallete['color_1'];
    }
    if(this.pallete['color_2']) {
      this.pallete['color2Id'] = this.pallete['color_2'].id;
      delete this.pallete['color_2'];
    }
    if(this.pallete['color_3']) {
      this.pallete['color3Id'] = this.pallete['color_3'].id;
      delete this.pallete['color_3'];
    }
    if(this.pallete['color_4']) {
      this.pallete['color4Id'] = this.pallete['color_4'].id;
      delete this.pallete['color_4'];
    }
    if(this.newPallete) {
      this.palleteService.save(this.pallete).subscribe(
        () => this.ngOnInit()
      )
    } else {
      this.palleteService.update(this.pallete).subscribe(
        () => this.ngOnInit()
      )
    }
    this.pallete = {} as Pallete;
    this.displayDialog = false;
  }


  delete() {
    this.palleteService.delete(this.selectedPallete).subscribe(
      () => {
        this.displayDialog = false;
        this.ngOnInit();
      }
    )
  }

  onRowSelect(event) {
    this.newPallete = false;
    this.pallete = this.clonePallete(event.data);
    this.displayDialog = true;
  }

  clonePallete(pallete) {
    let count: Pallete = {id: pallete.id, name: pallete.name, likes: pallete.likes, pallete_by: pallete.pallete_by, color_1: pallete.color_1, color_2: pallete.color_2, color_3: pallete.color_3, color_4: pallete.color_4};
    return count;
  }

}
