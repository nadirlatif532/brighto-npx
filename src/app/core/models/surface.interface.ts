import { Category } from './category.interface';

export interface Surface {
    id: number,
    name: string,
    Categories: Category[],
    image: any
}