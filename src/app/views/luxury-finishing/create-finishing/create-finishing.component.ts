import { Component, OnInit } from '@angular/core';
import { LuxuryFinishing } from '../../../core/models/luxury-finishing.interface';
import { LuxuryFinishingService } from '../../../core/services/luxury-finishing.service';
import { Router } from '@angular/router';
import { Country } from '../../../core/models/country.interface';
import { CountryService } from '../../../core/services/country.service';

@Component({
  selector: 'app-create-finishing',
  templateUrl: './create-finishing.component.html',
  styleUrls: ['./create-finishing.component.scss']
})
export class CreateFinishingComponent implements OnInit {

luxuryFinishing : LuxuryFinishing = {} as LuxuryFinishing
imageErr: boolean = false;
images: any[] = [];
countries: Country[];


  constructor(
    private finishingService: LuxuryFinishingService,
    private countryService: CountryService,
    private router: Router) { }

  ngOnInit() {
    this.countryService.getAll().subscribe(
      (next) => {this.countries = next},
      ()=>{},
      ()=>{}
  );}

  myUploader(event) {
    this.images.push(event.files[0]);
    this.imageErr = false;
  }
  CoverUploader(event){
    this.images.push(event.files[0]);
    this.imageErr = false;
  }
  ImagesUploader(event){
    for (let file of event.files) {
      this.images.push(file);
    }
  }
  removeImageUploader(event) {
    this.imageErr = true;
  }
  submit() {
    var tags = String(this.luxuryFinishing.description)
    var description = tags.replace(/<[^>]*>/g, '')
    let formData = new FormData();
    formData.append('name',this.luxuryFinishing.name);
    formData.append('description',description);
    formData.append('video',this.luxuryFinishing.video);
    formData.append('countries', JSON.stringify(this.luxuryFinishing.Countries));
    formData.append('image1',this.images[0]);
    formData.append('coverImage',this.images[1]);
    formData.append('sequence',this.luxuryFinishing.sequence.toString());

    let i ;
    for( i = 2 ; i < this.images.length; i++){
      let imageKey = 'image';
      imageKey = imageKey + (i);
      formData.append(imageKey,this.images[i]);

    }
    this.finishingService.save(formData).subscribe(
      () => this.router.navigate(['luxury-finishing', 'list']),
      () =>{},
      () =>{}
    );
  }
}
