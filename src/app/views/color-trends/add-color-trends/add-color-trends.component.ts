import { Component, OnInit } from '@angular/core';
import { ColorTrends } from '../../../core/models/color-trends.interface';
import { ColorTrendService } from '../../../core/services/color-trends.service';
import { ShadeService } from '../../../core/services/shade.service';
import { SharedService } from '../../../shared/services/shared.service';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Shade } from '../../../core/models/shade.interface';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-add-color-trends',
  templateUrl: './add-color-trends.component.html',
  styleUrls: ['./add-color-trends.component.scss']
})
export class AddColorTrendsComponent implements OnInit {

  displayDialog: boolean;
  cols: any[];
  colortrends: ColorTrends[];
  colortrend: ColorTrends = {} as ColorTrends;
  newColorTrend: boolean = false;
  selectedColorTrend: ColorTrends;
  shades:Shade[];
  baseURL = this.sharedService.baseUrl;

  constructor(
    private colorTrends: ColorTrendService,
    private shadeService: ShadeService,
    private sharedService: SharedService,
    private router:Router) { }

  ngOnInit() {
    forkJoin(
      this.colorTrends.getAll(),
      this.shadeService.getAll()
    ).subscribe(
      next => {
        this.colorTrends = next[0];
        this.shades = next[1];
      }
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
    this.displayDialog = false;
  }

  myUploader(event) {
    this.colortrend.image = event.files[0];
  }

}
