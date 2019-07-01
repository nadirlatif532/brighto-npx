import { Category } from './category.interface';
import { Country } from './country.interface';
import { Project } from './project.interface';
import { Surface } from './surface.interface';
import { Finish } from './finish.interface';
import { Packagings } from './packaging.interface';

export interface Product {
  id: number;
  name: string;
  description: Text,
  spreading: number,
  is_active: boolean,
  image: any,
  coverImage: any,
  ProjectTypes: Project[],
  Categories: Category[],
  Surfaces: Surface[],
  FinishTypes:Finish[],
  Countries: Country[],
  Packagings: Packagings[]
}
