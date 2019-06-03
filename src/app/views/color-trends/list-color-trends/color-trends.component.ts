import { Component, OnInit } from '@angular/core';
import { ColorTrends } from '../../../core/models/color-trends.interface';
import { ColorTrendService } from '../../../core/services/color-trends.service';
import { ShadeService } from '../../../core/services/shade.service';
import { SharedService } from '../../../shared/services/shared.service';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-color-trends',
  templateUrl: './color-trends.component.html',
  styleUrls: ['./color-trends.component.scss']
})
export class ColorTrendsComponent implements OnInit {

  displayDialog: boolean;
  cols: any[];
  colortrends: ColorTrends[];
  colortrend: ColorTrends;
  newColorTrend: boolean = false;
  selectedColorTrend: ColorTrends;
  shades:any = [];
  baseURL = this.sharedService.baseURL;

  constructor(private colorTrends: ColorTrendService,
    private shadeService: ShadeService,
    private sharedService: SharedService,
    private router:Router,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.colorTrends.getAll().subscribe(
      next => {
        this.colortrends = next;
        console.log(this.colortrend)
      }
    );
    // this.shadeService.getAll().subscribe(
    //   next => {
    //     this.shades = next.map((item) => {
    //       return {label: item.name, value:{id:item.id,name:item.name}}
    //     })
    //     this.shades.unshift({label:'Select Shade', value:null})
    //   }
    // )
    // console.log(this.colortrend)
  }
  editColorTrend(colortrend: any) {
    this.router.navigate(['color-trends','edit',colortrend.id])
  }

  deleteColorTrend(colortrend: any) {
    this.confirmationService.confirm({ message: 'Are you sure?' , 
    accept: () => {
      this.colorTrends.delete(colortrend).subscribe(
        () => this.ngOnInit()
      );
    }}); 
  }
}
