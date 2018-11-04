import {Subject} from 'rxjs';
import {MovieResponse, MovieGenre, Option} from 'src/app/tmdb-data/Movie';

export class TraitementFilms {

    checkedGenresReceived = new Subject<Option[]>();

    private _movies: MovieResponse[] = [];

    private _subject = new Subject<any>();

    constructor() {
    }


    get movies(): MovieResponse[] {
        return this._movies;
    }

    set movies(value: MovieResponse[]) {
        this._movies = value;
    }

    /* pour filter les films */

    public filter (options: Option[]): MovieResponse[] {
        const res: MovieResponse[] = [];
        const tableID: number [] = [];

        /* Pour chaque film, filtrer en fonction des genres */
        for(let i in this.movies){
            /* Pour chaque genre du film, on verifie si il se trouve dans myGenres
            si c'est le cas, on verifie qu'on a pas l'id du film dans tableID pour éviter
            les doublons avant d'ajouter l'id et d'ajouter le film dans res */
            for(let j in this.movies[i].genre_ids){

                for(let g in options){
                    if(this.movies[i].genre_ids[j] === options[g].id){
                        if(!(tableID.includes(this.movies[i].id))){
                            tableID.push(this.movies[i].id);
                            res.push(this.movies[i]);
                        }
                    }
                }
            }
        }
        return res;
        // const res: MovieResponse[] = [];
        // const tableID: number [] = [];
        // this.movies.forEach((currentMovie) => {
        //     currentMovie.genre_ids.forEach((currentId) => {
        //         options.forEach((genre) => {
        //             if (currentId === genre.id) {
        //                 if (!(tableID.includes(currentMovie.id))) {
        //                     tableID.push(currentMovie.id);
        //                     res.push(currentMovie);
        //                 }
        //             }
        //         });
        //     });
        // });
        // return res;
    }

    get subject(): Subject<any> {
        return this._subject;
    }

    set subject(value: Subject<any>) {
        this._subject = value;
    }

}

