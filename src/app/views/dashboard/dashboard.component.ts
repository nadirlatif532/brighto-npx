import { Component, OnInit } from '@angular/core';
import { ShadeService } from '../../core/services/shade.service';
import { FamilyService } from '../../core/services/family.service';
import { DealerService } from '../../core/services/dealer.service';
import { ProductService } from '../../core/services/product.service';
import { forkJoin } from 'rxjs';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  shadeCount: number = 0;
  familyCount: number = 0;
  dealerCount: number = 0;
  productCount: number = 0;
  constructor(
    private shadeService: ShadeService,
    private familyService: FamilyService,
    private dealerService: DealerService,
    private productService: ProductService) {
      forkJoin(
        shadeService.getAll(),
        familyService.getAll(),
        dealerService.getAll(),
        productService.getAll()
      ).subscribe(
        next=> {
        this.shadeCount = next[0].length,
        this.familyCount = next[1].length,
        this.dealerCount = next[2].length,
        this.productCount = next[3].length
        }
      )
   }

  
  

  ngOnInit(): void {
    // generate random values for mainChart
  }
}
