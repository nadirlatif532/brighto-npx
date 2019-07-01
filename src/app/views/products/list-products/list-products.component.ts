import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { Product } from '../../../core/models/product.interface';
import { ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';
import { SharedService } from '../../../shared/services/shared.service';
import { ShadeService } from '../../../core/services/shade.service';
import { Shade } from '../../../core/models/shade.interface';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: []
})
export class ListProductsComponent implements OnInit {

  products: Product[];
  loading: boolean = true;
  baseUrl: string;
  shades:any[];
  displayDetails:boolean = false;

  constructor(
    private productService: ProductService,
    private sharedService: SharedService,
    private confirmationService: ConfirmationService,
    private shadeService:ShadeService,
    private router: Router) { }
  
  ngOnInit() {
    this.productService.getAll().subscribe(
      next => this.products = next,
      () => {},
      () => this.loading = false
    );
    this.baseUrl = this.sharedService.baseUrl;
  }

  editProduct(product: Product) {
    this.router.navigate(['products', 'edit', product.id]);
  }
  viewShades(product: Product){
    this.displayDetails = true;
    this.shadeService.getShadesByProductId(product.id).subscribe(
      (next:any)=>{this.shades = next},
      ()=>{},
      ()=>{}
    );
  }

  deleteProduct(product: Product) {
    this.confirmationService.confirm({ message: 'Are you sure?' , 
    accept: () => {
      this.loading = true;
      this.productService.delete(product).subscribe(
        () => this.ngOnInit(),
        () => {},
        () => this.loading = false
      );
    }}); 
  }
}
