import {Subject} from 'rxjs';
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
    private listTmp: List;

    private _lists: List[] = [];
    
    constructor() {
    }


    addList(list: List) {
        this._lists.push(list);
    }

    public deleteList(list: List) {
        this._lists = this._lists.filter((cList) => cList !== list);
    }

    public addFilmToList (list: List, film: MovieResponse) {
        this._lists.forEach((cList) => {
            cList.addFilm(film);
        })
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

    public setListTmp(list: List){
        this.listTmp = list;
    }

    public getListTmp(): List{
        return this.listTmp;
    }

    public getMoviesFromList(id : string): MovieResponse[]{
        const currList = this._lists.find( (l) => l.id === id);

        return currList !== undefined ? currList.films : undefined;
    }

    public getListFromId(id: string): List{
        return this._lists.find( (l) => l.id === id);
    }

    public setLists(value: List[]) {
        this._lists = value;
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
    }

    get subject(): Subject<any> {
        return this._subject;
    }

    set subject(value: Subject<any>) {
        this._subject = value;
    }

    public generateID() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

  

}

