import { Component, OnInit } from '@angular/core';
import { ColorTrends } from '../../../core/models/color-trends.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { ColorTrendService } from '../../../core/services/color-trends.service';
import { forkJoin } from 'rxjs';
import { ShadeService } from '../../../core/services/shade.service';
import { Shade } from '../../../core/models/shade.interface';

@Component({
  selector: 'app-edit-color-trends',
  templateUrl: './edit-color-trends.component.html',
  styleUrls: ['./edit-color-trends.component.scss']
})
export class EditColorTrendsComponent implements OnInit {


  colortrends: ColorTrends[];
  selectedTrends: ColorTrends;
  colortrend: ColorTrends = {} as ColorTrends;
  displayDialog: boolean;
  shades: Shade[];

  constructor(
    private colorTrendsService: ColorTrendService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private shadeService: ShadeService
    ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.colorTrendsService.findById(id).subscribe(
      next => {
        this.colortrends = next;
        this.colortrend = {id:next.id,trendName:next.trendName,shade1:next.shade1,shade2:next.shade2,shade3:next.shade3,image:next.image};
      }
    );
    this.shadeService.getAll().subscribe(
      next => {
        this.shades = next;
      }
    )
  }

  myUploader(event) {
    this.colortrend.image = event.files[0];
  }

  submit() {
    let formData = new FormData();
    formData.append('image', this.colortrend.image, this.colortrend.image['trendName']);
    formData.append('trendName', this.colortrend.trendName);
    formData.append('shade1Id', this.colortrend.shade1.id.toString());
    formData.append('shade2Id', this.colortrend.shade2.id.toString());
    formData.append('shade3Id', this.colortrend.shade3.id.toString());
    this.colorTrendsService.update(formData).subscribe(
      () => this.router.navigate(['color-trends', 'list'])
    );
    this.colortrend = {} as ColorTrends;
    this.displayDialog = false;
  }


}
