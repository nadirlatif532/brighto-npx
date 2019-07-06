import { Country } from './country.interface';

export interface LuxuryFinishing {
  id: number;
  name: string;
  video: string;
  description: string;
  images: any[];
  Countries: Country[];
  sequence: number;
}
