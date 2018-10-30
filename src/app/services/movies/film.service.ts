import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import { MovieResponse, MovieGenre } from 'src/app/tmdb-data/Movie';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  sub : Subject<string[]> = new Subject<string[]>();
  genresChoisis : string[]=[];
  tableGenres : MovieGenre[]=[];
  myMovies : MovieResponse[] = [];
  constructor(private httpClient: HttpClient) { }

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

    /* moi : pour filter les films */

    filterMovies(myGenres: MovieGenre[]) : MovieResponse[] {
        var res : MovieResponse[] = [];
        var tableID : number []=[];
        
        /* Pour chaque film, filtrer en fonction des genres */
        for(let i in this.myMovies){
            /* Pour chaque genre du film, on verifie si il se trouve dans myGenres
            si c'est le cas, on verifie qu'on a pas son id dans tableID pour éviter les doublons
            avant d'ajouter l'id et d'ajouter le film dans res */
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
}

    /*public url_movie = `https://api.themoviedb.org/3/`;

    getMovieByName(name: string) {
        return this.httpClient.get(this.url_movie + `search/movie?api_key=384da4d1d38ad08447d757fb4629fa6b&language=en-US
                                    &query=${name}&include_adult=false`);
    }
    getLatestMovie() {
        return this.httpClient.get(this.url_movie + `movie/latest?api_key=384da4d1d38ad08447d757fb4629fa6b&language=en-US`);
    }
    getPopularMovies() {
        return this.httpClient.get<MovieResponse[]>(this.url_movie + `movie/popular?api_key=384da4d1d38ad08447d757fb4629fa6b&language=en-US&page=1`);
    }

    getGenreMovies(){
        return this.httpClient.get<MovieGenre[]>(this.url_movie + `genre/movie/list?api_key=384da4d1d38ad08447d757fb4629fa6b&language=en-US`);
    }

   /* search(term: string): Observable<Film[]> {
        const url = this.url_movie + `movie/popular?api_key=384da4d1d38ad08447d757fb4629fa6b&language=en-US&page=1`;
        return this.httpClient.get(url).pipe(
            map(res => {
                return res.json().results.map(item => {
                    return new SearchItem(
                        item.trackName,
                        item.artistName,
                        item.trackViewUrl,
                        item.artworkUrl30,
                        item.artistId
                    );
                });
            })
        );

    }*/

