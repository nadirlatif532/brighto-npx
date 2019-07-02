import { Component, OnInit } from '@angular/core';
import { LuxuryShade } from '../../../core/models/luxury-shades.interface';
import { LuxuryFinishing } from '../../../core/models/luxury-finishing.interface';
import { LuxuryFinishingService } from '../../../core/services/luxury-finishing.service';
import { LuxuryShadesService } from '../../../core/services/luxury-shades.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-luxury-shade',
  templateUrl: './edit-luxury-shade.component.html',
  styleUrls: ['./edit-luxury-shade.component.scss']
})
export class EditLuxuryShadeComponent implements OnInit {

luxuryShade: LuxuryShade  = {} as LuxuryShade;
imageErr: boolean = false;
luxuryProducts: LuxuryFinishing[];
luxuryShadeProducts: LuxuryFinishing[] = [];

constructor(
  private finishingService: LuxuryFinishingService,
  private luxuryShadeService: LuxuryShadesService,
  private activatedRoute: ActivatedRoute,
  private router: Router ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    if(id){
      this.luxuryShadeService.findById(id).subscribe(
        next => {this.luxuryShade = next;},
        ()=>{},
        ()=>{
          this.finishingService.getAll().subscribe(
            (next) => {
              this.luxuryProducts = next
              this.setLuxuryFinishings()},
            ()=>{},
            ()=>{}
        );
        }
      );
    }
  }
  setLuxuryFinishings(){
      for (let luxuryShadeFinishing of this.luxuryShade.LuxuryFinishes){
        for(let luxuryProduct of this.luxuryProducts){
          if(luxuryShadeFinishing.id == luxuryProduct.id){
            this.luxuryShadeProducts.push(luxuryProduct)
          }
        }
      }
      this.luxuryShade.LuxuryFinishes = this.luxuryShadeProducts;
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

    this.luxuryShadeService.update(formData, this.luxuryShade.id).subscribe(
      () => this.router.navigate(['luxury-shades', 'list']),
      () =>{},
      () =>{}
    );
  }
}
