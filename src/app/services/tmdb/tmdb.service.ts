import { Injectable } from '@angular/core';
import {MovieQuery, MovieResponse, MovieGenre} from '../../tmdb-data/Movie';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {PersonQuery, PersonResponse} from '../../tmdb-data/Person';
import {SearchMovieQuery, SearchMovieResponse} from '../../tmdb-data/searchMovie';
import {SearchPeopleQuery, SearchPeopleResponse} from '../../tmdb-data/SearchPeople';
import {TVQuery, TVResponse} from '../../tmdb-data/TV';
import {SearchTVQuery, SearchTVResponse} from '../../tmdb-data/SearchTV';
import { mapTo } from 'rxjs/operators';

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
  private api_key: string;

  private async get<T>(url: string, data: Object): Promise<HttpResponse<T>> {
    return this._http.get<T>( url, {
      observe: 'response',
      params: {...AlxToObjectString(data), api_key: this.api_key}
    }).toPromise();
  }


  tableGenres : MovieGenre[]=[];
  genresChoisis : string[]=[];
  filteredMovies : MovieResponse[];

  constructor(private _http: HttpClient) { }

  init(key: string): this {
    this.api_key = key;
    return this;
  }

  // _______________________________________________________________________________________________________________________________________
  // Movies ________________________________________________________________________________________________________________________________
  // _______________________________________________________________________________________________________________________________________
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
  /** moi : renvoie les films poulaires */
  async getPopular(options?: MovieQuery): Promise<MovieResponse[]> {
    const url = `${tmdbApi}/movie/popular?api_key=384da4d1d38ad08447d757fb4629fa6b&language=en-US&page=1`;
    const res = await this.get<MovieResponse[]>(url,options);
    return res.body;
  }

  /* moi : renvoie tous les genres de film qui existent dans la base */
  getGenres(){
    return this._http.get<MovieGenre[]>(`https://api.themoviedb.org/3/genre/movie/list?api_key=384da4d1d38ad08447d757fb4629fa6b&language=en-US`);
  }
  

  
  /* moi : pour filter les films */
  filterMovies(myMovies : MovieResponse[], myGenres: MovieGenre[],options?: MovieQuery) : MovieResponse[] {
    var res : MovieResponse[] = [];
    var tableID : number []=[];

    console.log("mygenres",myGenres);
    
    /* Pour chaque film, filtrer en fonction des genres */
    for(let i in myMovies){
      /* Pour chaque genre du film, on verifie si il se trouve dans myGenres
      si c'est le cas, on verifie qu'on a pas son id dans tableID pour éviter les doublons
      avant d'ajouter l'id et d'ajouter le film dans res */
      console.log("film ",i+" titre du film",myMovies[i].title);
      console.log("le film",myMovies[i]);
      for(let j in myMovies[i].genre_ids){
        console.log("id genres du film courrant",myMovies[i].genre_ids)
        for(let g in myGenres){
          if(myMovies[i].genre_ids[j] === myGenres[g].id){
            console.log("les id sont egaux",myGenres[g].id)
            if(!(tableID.includes(myMovies[i].id))){
              tableID.push(myMovies[i].id);
              res.push(myMovies[i]);
            }
          }
        }
      }



      /*for(let j in myMovies[i].genre_ids){
       // console.log("genre ",j+"les genres du film",myMovies[i].genres[j]);
        //console.log("tableau genre ",myGenres);
        


        if(myGenres.includes(myMovies[i].genres[j].name) ){
          if(!(tableID.includes(myMovies[i].id))){
            tableID.push(myMovies[i].id);
            res.push(myMovies[i]);
          }
        }*/
      
    }
    return res;
  }
/* demander à hardy

  variable : MovieGenre[]=[];

  verify(myArray1 : MovieGenre[],myArray2 : number[]) : void {

    for(let i in myArray1){
      this.variable.push(myArray1[i]);
    }
    
    console.log("longueur variable",this.variable.length);
    il affiche la longeur est égal à 1
    const result = this.variable.filter((a,i) => a.id == myArray2[i]).map(a => a.name);

    console.log("resultat",result);

  }

*/

/* une fonction qui prend en parametre un tableau genre et une liste d'id de genres et
  renvoie comme résultat les genres dont l'id est inclus dans le tableau genre*/
  filterGenres(tabId:number[],tabGenres : MovieGenre[]) : MovieGenre[]{
    console.log("le tableau id avant for",tabId);
    console.log("le tableau des genres avant for",tabGenres);
    for(let i in tabId){
      for(let j in tabGenres){
        if(tabId[i] == tabGenres[j].id){
          console.log("le tableau id apres for",tabId);
          console.log("le tableau des genres apres for",tabGenres);
          if(!this.tableGenres.includes(tabGenres[j])){
            console.log("ajout");
            this.tableGenres.push(tabGenres[j]);
          }
        }
      }
    }
    //console.log("les genres correspondant avec les id",this.tableGenres);
    return this.tableGenres;
  }


  /* renvoie les genres qui correspondent à ceux choisis {id,name} */
  getGenresChecked():MovieGenre[]{
    return this.init('384da4d1d38ad08447d757fb4629fa6b').tableGenres;
  }

  /* renvoie les genres qui correspondent à ceux choisis juste les noms*/
  getGenresCheckedNames():string[]{
    return this.init('384da4d1d38ad08447d757fb4629fa6b').genresChoisis;
  }

  /* renvoie les films filtrés*/
  getFilteredMovies():MovieResponse[]{
    return this.init('384da4d1d38ad08447d757fb4629fa6b').filteredMovies;
  }







  // _______________________________________________________________________________________________________________________________________
  // Person / People _______________________________________________________________________________________________________________________
  // _______________________________________________________________________________________________________________________________________
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

  

  // _______________________________________________________________________________________________________________________________________
  // TV ____________________________________________________________________________________________________________________________________
  // _______________________________________________________________________________________________________________________________________
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



}
