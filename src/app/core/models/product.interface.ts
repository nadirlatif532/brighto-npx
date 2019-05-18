import { Category } from './category.interface';
import { Country } from './country.interface';

export interface Product {
  id: number;
  name: string;
  category: Category,
  CategoryId: number,
  description: Text,
  spreading: number,
  is_active: boolean,
  image: any,
  countries: Country[]
}