import {MovieResponse} from './Movie';

export class List {
    id: string;
    name: string;
    films?: MovieResponse[] = [];
    visibility?: string;
    constructor(id: string, name: string, visibility?: string) {
        this.id = id;
        this.name = name;
        this.visibility = visibility;
     
    }

    addFilm(film: MovieResponse) {
        if(this.films === undefined) {
            this.films = [];
        }
        this.films.push(film);
    }

    setVisibility(visibility: string) {
        this.visibility = visibility
    }

    removeFilm(film: MovieResponse) {
        this.films = this.films.filter((currfilm) => currfilm !== film);
    }
}
