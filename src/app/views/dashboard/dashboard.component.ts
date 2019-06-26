import { Component, OnInit } from '@angular/core';
import { ShadeService } from '../../core/services/shade.service';
import { FamilyService } from '../../core/services/family.service';
import { DealerService } from '../../core/services/dealer.service';
import { ProductService } from '../../core/services/product.service';
import { forkJoin } from 'rxjs';
import { CountryService } from '../../core/services/country.service';
import { UserService } from '../../core/services/user.service';
import { OrderService } from '../../core/services/order.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  shadeCount: number = 0;
  familyCount: number = 0;
  countryCount: number = 0;
  productCount: number = 0;
  userCount: number = 0;
  orderCount: number = 0;

  constructor(
    private shadeService: ShadeService,
    private familyService: FamilyService,
    private countryService: CountryService,
    private userService: UserService,
    private orderService: OrderService,
    private productService: ProductService) {
      forkJoin(
        shadeService.getAll(),
        familyService.getAll(),
        countryService.getAll(),
        productService.getAll(),
        userService.getAll(),
        orderService.getAll()
      ).subscribe(
        next=> {
        this.shadeCount = next[0].length,
        this.familyCount = next[1].length,
        this.countryCount = next[2].length,
        this.productCount = next[3].length,
        this.userCount = next[4].length,
        this.orderCount = next[5].length
        }
      )
   }

  
  

  ngOnInit(): void {
    // generate random values for mainChart
  }
}
