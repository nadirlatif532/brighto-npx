import { Shade } from "./shade.interface";

export interface ColorTrends {
  id: number;
  trendName: string;
  image: any;
  shade1: Shade;
  shade2: Shade;
  shade3: Shade;
}
