import { Component, OnInit } from '@angular/core';
import { ColorTrends } from '../../../core/models/color-trends.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { ColorTrendService } from '../../../core/services/color-trends.service';
import { ShadeService } from '../../../core/services/shade.service';
import { Shade } from '../../../core/models/shade.interface';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-edit-color-trends',
  templateUrl: './edit-color-trends.component.html',
  styleUrls: ['./edit-color-trends.component.scss']
})
export class EditColorTrendsComponent implements OnInit {

  colortrends: ColorTrends[];
  colortrend: ColorTrends = {} as ColorTrends;
  shades: Shade[];

  constructor(
    private colorTrendsService: ColorTrendService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private shadeService: ShadeService) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    forkJoin(
      this.colorTrendsService.findById(id),
      this.shadeService.getAll()
    ).subscribe(
      (next: any) => {
        this.colortrend = { id: next[0].id, trendName: next[0].trendName, shade1: next[0].shade1, shade2: next[0].shade2, shade3: next[0].shade3, image: next[0].image };
        this.shades = next[1].map(
          shade => {
            delete shade["Countries"];
            delete shade["Family"];
            delete shade["Products"];
            return shade;
          }
        );
      }
    );
  }

  myUploader(event) {
    this.colortrend.image = event.files[0];
  }

  submit() {
    let formData = new FormData();
    formData.append('image', this.colortrend.image);
    formData.append('trendName', this.colortrend.trendName);
    formData.append('shade1Id', this.colortrend.shade1.id.toString());
    formData.append('shade2Id', this.colortrend.shade2.id.toString());
    formData.append('shade3Id', this.colortrend.shade3.id.toString());
    this.colorTrendsService.update(formData, this.colortrend.id).subscribe(
      () => this.router.navigate(['color-trends', 'list'])
    );
    this.colortrend = {} as ColorTrends;
  }

}
