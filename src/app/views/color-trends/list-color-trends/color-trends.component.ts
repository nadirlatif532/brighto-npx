import { Component, OnInit } from '@angular/core';
import { ColorTrends } from '../../../core/models/color-trends.interface';
import { ColorTrendService } from '../../../core/services/color-trends.service';
import { SharedService } from '../../../shared/services/shared.service';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-color-trends',
  templateUrl: './color-trends.component.html',
  styleUrls: ['./color-trends.component.scss']
})
export class ColorTrendsComponent implements OnInit {

  colortrends: ColorTrends[];
  loading: boolean = true;
  baseURL: string;

  constructor(
    private colorTrends: ColorTrendService,
    private sharedService: SharedService,
    private router:Router,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.baseURL = this.sharedService.baseUrl;
    this.colorTrends.getAll().subscribe(
      next => this.colortrends = next,
      () => { },
      () => this.loading = false
    );
  }
  
  editColorTrend(colortrend: any) {
    this.router.navigate(['color-trends','edit',colortrend.id])
  }

  deleteColorTrend(colortrend: any) {
    this.confirmationService.confirm({ message: 'Are you sure?' , 
    accept: () => {
      this.colorTrends.delete(colortrend).subscribe(
        () => this.ngOnInit(),
        () => {},
        () => this.loading = false
      );
    }}); 
  }
}
