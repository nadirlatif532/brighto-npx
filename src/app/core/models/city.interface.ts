import { Country } from './country.interface';

export interface City {
  id: number;
  name: string;
  Country: Country;
}