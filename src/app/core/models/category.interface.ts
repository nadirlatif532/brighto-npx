import { Project } from './project.interface';

export interface Category {
  id: number;
  name: string;
  project: Project;
  image: any;
}