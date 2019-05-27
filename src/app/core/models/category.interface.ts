import { Project } from './project.interface';

export interface Category {
  id: number;
  name: string;
  projects: Project[];
  image: any;
}