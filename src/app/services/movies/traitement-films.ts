import {Subject} from 'rxjs';
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
    }

    /* pour filter les films */

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
        }
        return res;
    }

    getGenresChecked():MovieGenre[]{
        return this.tableGenres;
    }

    get subject(): Subject<any> {
        return this._subject;
    }

    set subject(value: Subject<any>) {
        this._subject = value;
    }
   
}

