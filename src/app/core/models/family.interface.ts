import { ShadesFilter } from './shades-filter.interface';

export interface Family {
  id: number;
  name: string;
  r: number;
  g: number;
  b: number;
  ShadeFilter: ShadesFilter
}