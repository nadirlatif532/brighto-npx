import { Project } from './project.interface';

export interface Category {
  id: number;
  name: string;
  ProjectTypes: Project[];
  image: any;
}