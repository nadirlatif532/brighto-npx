import { LuxuryFinishing } from './luxury-finishing.interface';

export interface LuxuryShade{
  id: number;
  name: string;
  description: string;
  itemCode: string;
  image: any;
  LuxuryFinishes: LuxuryFinishing[];
}