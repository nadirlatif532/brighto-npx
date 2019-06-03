import { Shade } from './shade.interface';

export interface Pallete {
    id: string,
    color_1: Shade,
    color_2: Shade,
    color_3: Shade,
    color_4: Shade,
    name: string,
    likes: number,
    pallete_by: string
}