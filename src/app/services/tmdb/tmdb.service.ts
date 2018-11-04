import {Injectable} from '@angular/core';
import {MovieCredits, MovieQuery, MovieResponse, MovieVideos} from '../../tmdb-data/Movie';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {PersonQuery, PersonResponse} from '../../tmdb-data/Person';
import {SearchMovieQuery, SearchMovieResponse} from '../../tmdb-data/searchMovie';
import {SearchPeopleQuery, SearchPeopleResponse} from '../../tmdb-data/SearchPeople';
import {TVQuery, TVResponse} from '../../tmdb-data/TV';
import {SearchTVQuery, SearchTVResponse} from '../../tmdb-data/SearchTV';
import {Subject} from 'rxjs';
import {Constant} from '../../constante/Constant';

const tmdbApi = 'https://api.themoviedb.org/3';
type HTTP_METHOD = 'GET' | 'POST' | 'DELETE' | 'PUT';

function AlxToObjectString(data: Object): { [key: string]: string } {
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

    private _subject = new Subject<any>();
    clickRealisators = false;

    private async get<T>(url: string, data?: Object): Promise<HttpResponse<T>> {
        return this._http.get<T>(url, {
            observe: 'response',
            params: {...AlxToObjectString(data), api_key: Constant.tmdbKey}
        }).toPromise();
    }

    constructor(private _http: HttpClient) { }

    /**
     * Retourne une Promise contenant les détails du film dont l'id est passé en paramètre
     * @param number id
     * @param MovieQuery options
     * @returns Promise<MovieResponse>
     */
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

    /**
     * Retourne les informations suplémentaires des personnes (acteurs et réalisateurs)
     * @param number} id
     * @param PersonQuery options
     * @returns Promise<PersonResponse>
     */
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

    /**
     * Retourne un Observable des films populaires
     * @returns Observable<Object>
     */
    getPopularMovies() {
        return this._http.get<MovieResponse[]>(`${Constant.baseURL}movie/popular?api_key=${Constant.tmdbKey}&language=en-US&page=1`);
    }

    get subject(): Subject<any> {
        return this._subject;
    }

    set subject(value: Subject<any>) {
        this._subject = value;
    }

    /**
     * Retourne la liste des participants du film dont l'id est passé en paramètre
     * @param number id
     * @param MovieQuery options
     * @returns Promise<MovieCredits>
     */
    async getCredits(id: number, options?: MovieQuery): Promise<MovieCredits> {
        const url = `${tmdbApi}/movie/${id}/credits`;
        const result = await this.get<MovieCredits>(url, options);
        return result.body;
    }

    /**
     * Retourne une Promise de Vidéo
     * @param number id
     * @param MovieQuery options
     * @returns Promise<MovieVideos>
     */
    async getVideos(id: number, options?: MovieQuery): Promise<MovieVideos> {
        const url = `${tmdbApi}/movie/${id}/videos`;
        const result = await this.get<MovieVideos>(url, options);
        return result.body;
    }

    /**
     * Retourne une Promise contenant les infos d'un film, son réalisateur et ses acteurs
     * @param number id
     * @returns Promise<[MovieResponse , MovieCredits , MovieVideos]>
     */
    async getMovieDetails(id: number): Promise<[MovieResponse, MovieCredits, MovieVideos]> {
        const moviePromise = this.getMovie(id);
        const creditsPromise = this.getCredits(id);
        const videosPromise = this.getVideos(id);
        const allPromise = await Promise.all([moviePromise, creditsPromise, videosPromise]);
        return allPromise;
    }

}
