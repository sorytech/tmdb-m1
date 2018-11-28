<<<<<<< HEAD

import {Film} from '../../modeles/myModeles';
import {MovieResponse, MovieCredits, Crew, Cast, MovieVideos, Result} from '../../tmdb-data/Movie';
import {TmdbService} from '../../services/tmdb/tmdb.service';
import {PersonResponse} from '../../tmdb-data/Person';
import {Constant} from '../../constante/Constant';
import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {TraitementFilmsService} from '../../services/movies/traitement-films';

=======
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieResponse, MovieCredits, Crew, Cast} from '../../tmdb-data/Movie';
import {TmdbService} from '../../services/tmdb/tmdb.service';
import { PersonResponse } from 'src/app/tmdb-data/Person';
>>>>>>> 1bb82f7e3c3b6b520b2a28e93cf268872877ad96

@Component({
    selector: 'app-film',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.css']
})
export class FIlmComponent implements OnInit {
<<<<<<< HEAD
    public currentFilmResponse: MovieResponse; // Film en cours
    public currentFilmCredits: MovieCredits; // Film en cours
    public currentFilmVideos: MovieVideos;
    public crew: Crew;
    public casts: Cast[] = [];
    public director: PersonResponse;
    public trailer: Result;
=======

    public currentFilmResponse: MovieResponse; // Film en cours
>>>>>>> 1bb82f7e3c3b6b520b2a28e93cf268872877ad96
    private id: string;
    showSpinner : boolean=true;

<<<<<<< HEAD
    // L'Id du film qui serai passé en paramètre dans le router
  
    constructor(private _route: ActivatedRoute, private _tmdb: TmdbService, private _sanitizer: DomSanitizer) {
=======
    // L'Id du film qui sera passé en paramètre dans le router
>>>>>>> 1bb82f7e3c3b6b520b2a28e93cf268872877ad96

    }

    ngOnInit() {
        console.log('Film : ', this._route.snapshot.params['id']);
        this.id = this._route.snapshot.params['id']; // On récupère l'id du film
        setTimeout(() =>
<<<<<<< HEAD
                this._tmdb.getMovieDetails(Number(this.id))
                    .then(([mr, mc, mv]) => {
                        this.currentFilmResponse = mr;
                        this.currentFilmCredits = mc;
                        this.currentFilmVideos = mv;
                        this.crew = mc.crew.find((elem) => elem.job === 'Director');
                        this.trailer = mv.results.find((result) => result.type === 'Trailer');
                        this._tmdb.getPerson(this.crew.id).then((realisateur) => {
                            this.director = realisateur;
                        });

                        this.casts = mc.cast;
                        this.casts.splice(3); // On ne retient que les 3 premiers acteurs
                    })
                    .catch(err => console.error('Error getting movie:', err)),
            1000);
=======
            this.tmdb.init('384da4d1d38ad08447d757fb4629fa6b') // Clef de TMDB
            .getMovie(Number(this.id))
            .then((m: MovieResponse) => {
                this.currentFilmResponse = m;
                this.showSpinner=false;
            })
            .catch(err => console.error('Error getting movie:', err)),
        1000);
        

>>>>>>> 1bb82f7e3c3b6b520b2a28e93cf268872877ad96
    }

    // Retourne l'URL complète du poster du film en cours

    getPath(path: string): string {
        return `https://image.tmdb.org/t/p/w500${path}`;
    }

    getPathVideo() {
        return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.trailer.key);
    }

}
