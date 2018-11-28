import {MovieResponse} from './Movie';

export interface List {
    id: number;
    name: string;
    films: MovieResponse[];
    visibility:string;
}
