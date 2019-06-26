import { Component, OnInit } from '@angular/core';
import { LuxuryFinishing } from '../../../core/models/luxury-finishing.interface';
import { LuxuryFinishingService } from '../../../core/services/luxury-finishing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-finishing',
  templateUrl: './create-finishing.component.html',
  styleUrls: ['./create-finishing.component.scss']
})
export class CreateFinishingComponent implements OnInit {

luxuryFinishing : LuxuryFinishing = {} as LuxuryFinishing
imageErr: boolean = false;

  constructor(
    private finishingService: LuxuryFinishingService,
    private router: Router) { }

  ngOnInit() {
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
    this.finishingService.save(formData).subscribe(
      () => this.router.navigate(['luxury-finishing', 'list']),
      () =>{},
      () =>{}
    );
  }
}
