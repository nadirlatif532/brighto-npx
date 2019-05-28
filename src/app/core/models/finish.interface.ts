import { Surface } from './surface.interface';

export interface Finish {
  id: number;
  name: string;
  Surfaces: Surface[];
  image: any;
}
