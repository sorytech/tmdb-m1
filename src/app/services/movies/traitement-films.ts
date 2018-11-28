import {Subject} from 'rxjs';
<<<<<<< HEAD
import {MovieResponse, MovieGenre, Option} from 'src/app/tmdb-data/Movie';
import {Injectable} from '@angular/core';
import {List} from '../../tmdb-data/List';

@Injectable({
    providedIn: 'root'
})
export class TraitementFilmsService {
    public checkedGenresReceived = new Subject<Option[]>();
    private _movies: MovieResponse[] = [];
    private _subject = new Subject<any>();

    private _lists: List[] = [];

    constructor() {
    }


    get movies(): MovieResponse[] {
        return this._movies;
    }

    set movies(value: MovieResponse[]) {
        this._movies = value;
    }

    get lists(): List[] {
        return this._lists;
    }

    public setLists(value: List[]) {
        this._lists = value;
=======
import { MovieResponse, MovieGenre } from 'src/app/tmdb-data/Movie';

export class TraitementFilms {
  sub : Subject<string[]> = new Subject<string[]>();
  genresChoisis : string[]=[];
  tableGenres : MovieGenre[]=[];
  myMovies : MovieResponse[] = [];

  private _subject = new Subject<any>();
  constructor() { }

    genresCoches(){
        this.sub.next(this.genresChoisis);
    }

    setGenres(s:string[]){
        this.genresChoisis = s;
    }

    setMovies(f : MovieResponse[]){
        this.myMovies = f;
    }

    getMovies(): MovieResponse[]{
        return this.myMovies;
>>>>>>> 1bb82f7e3c3b6b520b2a28e93cf268872877ad96
    }

    /* pour filter les films */

<<<<<<< HEAD
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
=======
    filterMovies(myGenres: MovieGenre[]) : MovieResponse[] {
        var res : MovieResponse[] = [];
        var tableID : number []=[];
        
        /* Pour chaque film, filtrer en fonction des genres */
        for(let i in this.myMovies){
            console.log("titre ",this.myMovies[i].title);
            console.log("duree ",this.myMovies[i]);
            /* Pour chaque genre du film, on verifie si il se trouve dans myGenres
            si c'est le cas, on verifie qu'on a pas l'id du film dans tableID pour éviter
            les doublons avant d'ajouter l'id et d'ajouter le film dans res */
            for(let j in this.myMovies[i].genre_ids){
                
                for(let g in myGenres){
                    if(this.myMovies[i].genre_ids[j] === myGenres[g].id){
                        if(!(tableID.includes(this.myMovies[i].id))){
                            tableID.push(this.myMovies[i].id);
                            res.push(this.myMovies[i]);
                        }
                    }
                }
            }   
>>>>>>> 1bb82f7e3c3b6b520b2a28e93cf268872877ad96
        }
        return res;
    }

<<<<<<< HEAD
=======
    getGenresChecked():MovieGenre[]{
        return this.tableGenres;
    }

>>>>>>> 1bb82f7e3c3b6b520b2a28e93cf268872877ad96
    get subject(): Subject<any> {
        return this._subject;
    }

    set subject(value: Subject<any>) {
        this._subject = value;
    }
<<<<<<< HEAD

=======
   
>>>>>>> 1bb82f7e3c3b6b520b2a28e93cf268872877ad96
}

