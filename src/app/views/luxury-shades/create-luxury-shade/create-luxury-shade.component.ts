import { Component, OnInit } from '@angular/core';
import { LuxuryShade } from '../../../core/models/luxury-shades.interface';
import { LuxuryFinishing } from '../../../core/models/luxury-finishing.interface';
import { LuxuryFinishingService } from '../../../core/services/luxury-finishing.service';
import { Router } from '@angular/router';
import { LuxuryShadesService } from '../../../core/services/luxury-shades.service';

@Component({
  selector: 'app-create-luxury-shade',
  templateUrl: './create-luxury-shade.component.html',
  styleUrls: ['./create-luxury-shade.component.scss']
})
export class CreateLuxuryShadeComponent implements OnInit {

  luxuryShade: LuxuryShade  = {} as LuxuryShade;
  imageErr: boolean = false;
  luxuryProducts: LuxuryFinishing[];

  constructor(
    private finishingService: LuxuryFinishingService,
    private luxuryshadeService: LuxuryShadesService,
    private router: Router ) { }

    ngOnInit() {
      this.finishingService.getAll().subscribe(
        (next) => {this.luxuryProducts = next},
        ()=>{},
        ()=>{}
    );
  }
  myUploader(event) {
    this.luxuryShade.image = event.files[0];
    this.imageErr = false;
  }
  removeImageUploader(event) {
    this.imageErr = true;
  }
  submit() {
    var tags = String(this.luxuryShade.description)
    var description = tags.replace(/<[^>]*>/g, '')
    let formData = new FormData();
    formData.append('name',this.luxuryShade.name);
    formData.append('description',description);
    formData.append('itemCode',this.luxuryShade.itemCode);
    formData.append('image',this.luxuryShade.image);
    formData.append('LuxuryFinishes', JSON.stringify(this.luxuryShade.LuxuryFinishes));

    this.luxuryshadeService.save(formData).subscribe(
      () => this.router.navigate(['luxury-shades', 'list']),
      () =>{},
      () =>{}
    );
  }

}
