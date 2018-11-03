import {Injectable} from '@angular/core';
import {MovieCredits, MovieQuery, MovieResponse, MovieVideos} from '../../tmdb-data/Movie';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {PersonQuery, PersonResponse} from '../../tmdb-data/Person';
import {SearchMovieQuery, SearchMovieResponse} from '../../tmdb-data/searchMovie';
import {SearchPeopleQuery, SearchPeopleResponse} from '../../tmdb-data/SearchPeople';
import {TVQuery, TVResponse} from '../../tmdb-data/TV';
import {SearchTVQuery, SearchTVResponse} from '../../tmdb-data/SearchTV';

const tmdbApi = 'https://api.themoviedb.org/3';
type HTTP_METHOD = 'GET' | 'POST' | 'DELETE' | 'PUT';

function AlxToObjectString(data: Object): {[key: string]: string} {
  const res = {};
  for (const k in data) {
    const v = data[k];
    res[k] = typeof v === 'string' ? v : JSON.stringify(v);
  }
  return res;
}

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  // private movieDetails: MovieDetails;
  private movieResponse: MovieResponse;
  private movieCredits: MovieCredits;
  private api_key: string;

    private _subject = new Subject<any>();

    private async get<T>(url: string, data?: Object): Promise<HttpResponse<T>> {
        return this._http.get<T>(url, {
            observe: 'response',
            params: {...AlxToObjectString(data), api_key: Constant.tmdbKey}
        }).toPromise();
    }

    constructor(private _http: HttpClient) {

    }

    init(key: string): this {
        this.api_key = key;
        return this;
    }
    async getMovie(id: number, options?: MovieQuery): Promise<MovieResponse> {
        const url = `${tmdbApi}/movie/${id}`;
        const res = await this.get<MovieResponse>(url, options);
        return res.body;
    }

    async searchMovie(query: SearchMovieQuery): Promise<SearchMovieResponse> {
        const url = `${tmdbApi}/search/movie`;
        const res = await this.get<SearchMovieResponse>(url, query);
        return res.body;
    }
    async getPerson(id: number, options?: PersonQuery): Promise<PersonResponse> {
        const url = `${tmdbApi}/person/${id}`;
        const res = await this.get<PersonResponse>(url, options);
        return res.body;
    }

    async searchPerson(query: SearchPeopleQuery): Promise<SearchPeopleResponse> {
        const url = `${tmdbApi}/search/person`;
        const res = await this.get<SearchPeopleResponse>(url, query);
        return res.body;
    }


    async searchCredits(query: SearchPeopleQuery): Promise<SearchPeopleResponse> {
        const url = `${tmdbApi}/search/person`;
        const res = await this.get<SearchPeopleResponse>(url, query);
        return res.body;
    }
    async getTV(id: number, options?: TVQuery): Promise<TVResponse> {
        const url = `${tmdbApi}/tv/${id}`;
        const res = await this.get<TVResponse>(url, options);
        return res.body;
    }

    async searchTV(query: SearchTVQuery): Promise<SearchTVResponse> {
        const url = `${tmdbApi}/search/tv`;
        const res = await this.get<SearchTVResponse>(url, query);
        return res.body;
    }

    getMovieByName(name: string) {
        return this._http.get(`${Constant.baseURL}search/movie?api_key=${Constant.tmdbKey}&language=en-US
                                    &query=${name}&include_adult=false`);
    }

    getLatestMovie() {
        return this._http.get(`${Constant.baseURL}movie/latest?api_key=${Constant.tmdbKey}&language=en-US`);
    }

    getPopularMovies() {
        return this._http.get<MovieResponse[]>(`${Constant.baseURL}movie/popular?api_key=${Constant.tmdbKey}&language=en-US&page=1`);
    }
    getPopularPerson() {
        return this._http.get<PersonResponse[]>(`${Constant.baseURL}person/popular?api_key=${Constant.tmdbKey}&language=en-US&page=1`);
    }
    get subject(): Subject<any> {
        return this._subject;
    }

    set subject(value: Subject<any>) {
        this._subject = value;
    }

  async getCredits(id: number, options?: MovieQuery): Promise<MovieCredits> {
    const url = `${tmdbApi}/movie/${id}/credits`;
    const res = await this.get<MovieCredits>(url, options);
    return res.body;
  }

  async getVideos(id: number, options?: MovieQuery): Promise<MovieVideos> {
    const url= `${tmdbApi}/movie/${id}/videos`;
    const res = await this.get<MovieVideos>(url, options);
    return res.body;
  }
  async getMovieDetails(id: number): Promise<[MovieResponse, MovieCredits, MovieVideos]> {
    const P1 = this.getMovie(id);
    const P2 = this.getCredits(id);
    const P3 = this.getVideos(id);
    console.log('P1', P1);
    console.log('P2', P2);
    console.log('P3', P3);
    const P = await Promise.all([P1, P2, P3]);
    console.log('P1', P[0]);
    console.log('P2', P[1]);
    return P;
  }
}
