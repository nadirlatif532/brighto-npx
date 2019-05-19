import { Product } from './product.interface';
import { Country } from './country.interface';
import { Family } from './family.interface';

export interface Shade {
  id: number;
  ProductId: number;
  name: string;
  r: number;
  g: number;
  b: number;  
  description: string;
  itemCode: string;
  isAC: boolean;
  isRM: boolean;
  product: Product;
  country: Country;
  family: Family;
}