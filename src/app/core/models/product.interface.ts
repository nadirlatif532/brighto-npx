import { Category } from './category.interface';
import { Country } from './country.interface';
import { Project } from './project.interface';
import { Surface } from './surface.interface';
import { Finish } from './finish.interface';

export interface Product {
  id: number;
  name: string;
  category: Category,
  ProjectTypeId: number,
  CategoryId: number,
  SurfaceId: number,
  FinishTypeId: number,
  description: Text,
  spreading: number,
  is_active: boolean,
  image: any,
  project: Project,
  surface: Surface,
  finish: Finish,
  Countries: Country[]
}