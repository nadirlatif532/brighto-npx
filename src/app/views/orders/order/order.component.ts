import { Component, OnInit } from "@angular/core";
import { OrderService } from "../../../core/services/order.service";
import { Order } from "../../../core/models/order.interface";
import { forkJoin } from "rxjs";
import { DealerService } from "../../../core/services/dealer.service";
import { ProductService } from "../../../core/services/product.service";
import { ShadeService } from "../../../core/services/shade.service";
import { UserService } from "../../../core/services/user.service";
import { Dealer } from "../../../core/models/dealer.interface";
import { User } from "../../../core/models/user.interface";
import { Product } from "../../../core/models/product.interface";
import { Shade } from "../../../core/models/shade.interface";
import { Status } from '../../../core/models/status.interface';

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: []
})
export class OrderComponent implements OnInit {
  displayDialog: boolean;
  cols: any[];
  orders: Order[];
  dealers: Dealer[];
  products: Product[];
  shades: Shade[];
  users: User[]
  order: Order;
  newOrder: boolean = false;
  selectedOrder: Order;
  loading: boolean = true;
  statuses:any =  [{name:'PENDING'},{name:'CONFIRMED'},{name:'ACCEPTED'},{name:'DELIVERED'}];

  constructor(
    private orderService: OrderService,
    private dealerService: DealerService,
    private productService: ProductService,
    private shadeService: ShadeService,
    private userService: UserService
  ) {}

  ngOnInit() {
    forkJoin(
      this.orderService.getAll(),
      this.dealerService.getAll(),
      this.productService.getAll(),
      this.shadeService.getAll(),
      this.userService.getAll()
    ).subscribe(
      next => {
        this.orders = next[0];
        this.orders = this.orders.map((item)=> {
          item['status'] = {name:String(item['status'])};
          return item;
        })
        this.dealers = next[1];
        this.products = next[2];
        this.shades = next[3];
        this.users = next[4];
      },
      () => {},
      () => (this.loading = false)
    );
  }

  showDialogToAdd() {
    this.newOrder = true;
    this.order = {} as Order;
    this.displayDialog = true;
  }

  save() {
    let formData = new FormData();
    formData.append('UserId',this.order.User['id'].toString());
    formData.append('DealerId',this.order.Dealer['id'].toString());
    formData.append('ProductId',this.order.Product['id'].toString());
    formData.append('ShadeId',this.order.Shade['id'].toString());
    formData.append('status',this.order.status['name'].toString());
    formData.append('orderDetails',this.order.orderDetails.toString());
    formData.append('quantity',this.order.quantity.toString());

    
    this.loading = true;
    if (this.newOrder) {
      this.orderService.save(formData).subscribe(() => this.ngOnInit());
    } else {
      this.orderService.update(formData,this.order.id).subscribe(() => this.ngOnInit());
    }
    this.order = null;
    this.displayDialog = false;
  }

  delete() {
    this.loading = true;
    this.orderService
      .delete(this.selectedOrder)
      .subscribe(() => this.ngOnInit());
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newOrder = false;
    this.order = this.cloneOrder(event.data);
    this.displayDialog = true;
  }

  cloneOrder(order) {
    let count: Order = {
      id: order.id,
      orderDetails: order.orderDetails,
      quantity: order.quantity,
      status: order.status,
      User: order.User,
      Dealer: order.Dealer,
      Product: order.Product,
      Shade: order.Shade
    };
    return count;
  }
}
