import {MovieResponse} from './Movie';

export interface List {
    id: string;
    name: string;
    films: MovieResponse[];
}
