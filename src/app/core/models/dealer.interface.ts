import { Country } from "./country.interface";
import { City } from "./city.interface";
import { User } from './user.interface';

export interface Dealer {
  id: number;
  name: string;
  address: string;
  longitude: string;
  latitude: string;
  status: string;
  Country: Country;
  City: City;
  user: User;
  sequence: number;
}
