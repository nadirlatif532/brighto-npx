import { Component, OnInit } from '@angular/core';
import { LuxuryFinishing } from '../../../core/models/luxury-finishing.interface';
import { LuxuryFinishingService } from '../../../core/services/luxury-finishing.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Country } from '../../../core/models/country.interface';
import { CountryService } from '../../../core/services/country.service';

@Component({
  selector: 'app-edit-finishing',
  templateUrl: './edit-finishing.component.html',
  styleUrls: ['./edit-finishing.component.scss']
})
export class EditFinishingComponent implements OnInit {

  luxuryFinishing : LuxuryFinishing = {} as LuxuryFinishing;
  imageErr: boolean = false;
  images: any[] = [];
  countries: Country[];
  luxuryfinishingCountries:Country[] = [];

  constructor(
    private finishingService: LuxuryFinishingService,
    private countryService: CountryService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    const id = this.activatedRoute.snapshot.params['id'];
    if(id){
      this.finishingService.findById(id).subscribe(
        next => {this.luxuryFinishing = next;},
        ()=>{},
        ()=>{
          this.countryService.getAll().subscribe(
            (next) => {
              this.countries = next
              this.setCountries()},
            ()=>{},
            ()=>{}
        );
        }
      );
    }
  }
  setCountries(){
    for (let luxuryFinishingCountrie of this.luxuryFinishing.Countries){
      for(let country of this.countries){
        if(luxuryFinishingCountrie.id == country.id){
          this.luxuryfinishingCountries.push(country)
        }
      }
    }
    this.luxuryFinishing.Countries = this.luxuryfinishingCountries;
  }
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
  
    let i ;
    for( i = 1 ; i <= this.images.length; i++){
      let imageKey = 'image';
      imageKey = imageKey + i;
      formData.append(imageKey,this.images[--i].name);

    }
    this.finishingService.update(formData,this.luxuryFinishing.id).subscribe(
      () => this.router.navigate(['luxury-finishing', 'list']),
      () =>{},
      () =>{}
    );
  }

}
