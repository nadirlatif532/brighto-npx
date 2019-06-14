import { Component, OnInit } from '@angular/core';
import { ColorTrends } from '../../../core/models/color-trends.interface';
import { ColorTrendService } from '../../../core/services/color-trends.service';
import { ShadeService } from '../../../core/services/shade.service';
import { Router } from '@angular/router';
import { Shade } from '../../../core/models/shade.interface';

@Component({
  selector: 'app-add-color-trends',
  templateUrl: './add-color-trends.component.html',
  styleUrls: ['./add-color-trends.component.scss']
})
export class AddColorTrendsComponent implements OnInit {

  colortrend: ColorTrends = {} as ColorTrends;
  shades: Shade[];

  constructor(
    private colorTrends: ColorTrendService,
    private shadeService: ShadeService,
    private router:Router) { }

  ngOnInit() {
    this.shadeService.getAll().subscribe(
      (next) => this.shades = next
    );
  }

  submit(){
    let formData = new FormData();
    formData.append('image', this.colortrend.image, this.colortrend.image['name']);
    formData.append('trendName', this.colortrend.trendName);
    formData.append('shade1Id', this.colortrend.shade1.id.toString());
    formData.append('shade2Id', this.colortrend.shade2.id.toString());
    formData.append('shade3Id', this.colortrend.shade3.id.toString());
    this.colorTrends.save(formData).subscribe(
      () => this.router.navigate(['color-trends', 'list'])
    );
    this.colortrend = {} as ColorTrends;
  }

  myUploader(event) {
    this.colortrend.image = event.files[0];
  }

}
