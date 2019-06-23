import { Component, OnInit } from '@angular/core';
import { LuxuryFinishing } from '../../../core/models/luxury-finishing.interface';
import { LuxuryFinishingService } from '../../../core/services/luxury-finishing.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-finishing',
  templateUrl: './edit-finishing.component.html',
  styleUrls: ['./edit-finishing.component.scss']
})
export class EditFinishingComponent implements OnInit {

  luxuryFinishing : LuxuryFinishing = {} as LuxuryFinishing;
  imageErr: boolean = false;


  constructor(
    private finishingService: LuxuryFinishingService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    const id = this.activatedRoute.snapshot.params['id'];
    if(id){
      this.finishingService.findById(id).subscribe(
        next => {
          this.luxuryFinishing = next;
        }
      );
    }

  }
  myUploader(event) {
    this.luxuryFinishing.image = event.files[0];
    this.imageErr = false;
  }
  removeImageUploader(event) {
    this.imageErr = true;
  }
  submit() {
    let formData = new FormData();
    formData.append('name',this.luxuryFinishing.name);
    formData.append('description',this.luxuryFinishing.description);
    formData.append('image', this.luxuryFinishing.image, this.luxuryFinishing.image.name);
    this.finishingService.update(formData,this.luxuryFinishing.id).subscribe(
      () => this.router.navigate(['luxury-finishing', 'list']),
      () =>{},
      () =>{}
    );
  }

}
