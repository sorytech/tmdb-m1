import {Component, OnInit} from '@angular/core';
<<<<<<< HEAD
import {Crew} from '../../tmdb-data/Movie';
import {PersonResponse} from '../../tmdb-data/Person';
import {ActivatedRoute} from '@angular/router';
import {TmdbService} from '../../services/tmdb/tmdb.service';
import {Constant} from '../../constante/Constant';
import {TraitementFilmsService} from '../../services/movies/traitement-films';


@Component({
    selector: 'app-realisateur',
    templateUrl: './realisateur.component.html',
    styleUrls: ['./realisateur.component.css']
})
export class RealisateurComponent implements OnInit {

    private _current_id: number;
    private _director: PersonResponse;
    public showSpinner = true;
    public fromFilm = '';

    constructor(private _route: ActivatedRoute, private tmdb: TmdbService) {
    }

    ngOnInit() {
        this._current_id = this._route.snapshot.params['id']; // On récupère l'id du film
        this.fromFilm = this._route.snapshot.params['fromFilm'];
        setTimeout(() =>
                this.tmdb // Clef de TMDB
                    .getPerson(this._current_id).then((realisateur) => {
                    this._director = realisateur;
                    this.showSpinner = false;
                })
                    .catch(err => console.error('Error getting direction:', err)),
            1000);

    }

    /**
     * Retourne l'url de poster de la photo du réalisateur en cours
     * @param string path
     * @returns string
     */
    getPath(path: string): string {
        return `${Constant.imageBaseURL}${path}`;
    }

    get current_id(): number {
        return this._current_id;
    }

    set current_id(value: number) {
        this._current_id = value;
    }

    get director(): PersonResponse {
        return this._director;
    }

    set director(value: PersonResponse) {
        this._director = value;
    }
=======
import {Crew, MovieCredits, MovieResponse} from '../../tmdb-data/Movie';
import {PersonResponse} from '../../tmdb-data/Person';
import {ActivatedRoute} from '@angular/router';
import {TmdbService} from '../../services/tmdb/tmdb.service';


@Component({
  selector: 'app-realisateur',
  templateUrl: './realisateur.component.html',
  styleUrls: ['./realisateur.component.css']
})
export class RealisateurComponent implements OnInit {


  constructor(private _route: ActivatedRoute, private tmdb: TmdbService) { }
  public current_id: number;
  public  crew: Crew;
  public  director: PersonResponse={};
  showSpinner: boolean=true;

  ngOnInit() {
    this.current_id = this._route.snapshot.params['id']; // On récupère l'id du film
      this.tmdb.getPerson(this.current_id).then((r:PersonResponse) =>{
        this.director=r;
        this.showSpinner=false;
      }).catch(err => console.log("error getting director",err));
  }

  getPath(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }


>>>>>>> 1bb82f7e3c3b6b520b2a28e93cf268872877ad96

}
