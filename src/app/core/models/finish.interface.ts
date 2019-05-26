import { Surface } from './surface.interface';

export interface Finish {
  id: number;
  name: string;
  surface: Surface;
  image: any;
}
