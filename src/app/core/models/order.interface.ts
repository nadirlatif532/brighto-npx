import { Dealer } from './dealer.interface';
import { Product } from './product.interface';
import { Shade } from './shade.interface';
import { User } from './user.interface';
import { Status } from './status.interface';

export interface Order {
  id: number;
  orderDetails: string;
  quantity: number;
  status: Status;
  Dealer: Dealer;
  Product: Product;
  Shade: Shade;
  User: User;
}