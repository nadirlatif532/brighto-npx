import { Category } from './category.interface';

export interface Surface {
    id: number,
    name: string,
    category: Category,
    image: any
}