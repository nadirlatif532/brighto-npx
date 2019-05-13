import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { Product } from '../../../core/models/product.interface';
import { ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  products: Product[];

  constructor(
    private productService: ProductService,
    private confirmationService: ConfirmationService,
    private router: Router) { }

  ngOnInit() {
    this.productService.getAll().subscribe(next => this.products = next);
  }

  editProduct(product: Product) {
    this.router.navigate(['products', 'edit', product.id]);
  }

  deleteProduct(product: Product) {
    this.confirmationService.confirm({ message: 'Are you sure?' , 
    accept: () => {
      this.productService.delete(product).subscribe(
        () => this.ngOnInit()
      );
    }}); 
  }
}
