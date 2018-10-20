import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {Film} from '../../modeles/myModeles';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private httpClient: HttpClient) { }

    public url_movie = `https://api.themoviedb.org/3/`;

    getMovieByName(name: string) {
        return this.httpClient.get(this.url_movie + `search/movie?api_key=384da4d1d38ad08447d757fb4629fa6b&language=en-US
                                    &query=${name}&include_adult=false`);
    }
    getLatestMovie() {
        return this.httpClient.get(this.url_movie + `movie/latest?api_key=384da4d1d38ad08447d757fb4629fa6b&language=en-US`);
    }
    getPopularMovies() {
        return this.httpClient.get<Film[]>(this.url_movie + `movie/popular?api_key=384da4d1d38ad08447d757fb4629fa6b&language=en-US&page=1`);
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
}
