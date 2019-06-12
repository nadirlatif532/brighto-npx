import { Category } from './category.interface';
import { Country } from './country.interface';
import { Project } from './project.interface';
import { Surface } from './surface.interface';
import { Finish } from './finish.interface';

export interface Product {
  id: number;
  name: string;
  description: Text,
  spreading: number,
  is_active: boolean,
  image: any,
  ProjectType: Project,
  Category: Category,
  Surface: Surface,
  FinishType: Finish,
  Countries: Country[]
}