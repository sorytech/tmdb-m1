
import {Film} from '../../modeles/myModeles';
import {MovieResponse, MovieCredits, Crew, Cast, MovieVideos, Result} from '../../tmdb-data/Movie';
import {TmdbService} from '../../services/tmdb/tmdb.service';
import {PersonResponse} from '../../tmdb-data/Person';
import {Constant} from '../../constante/Constant';
import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {TraitementFilms} from '../../services/movies/traitement-films';


@Component({
    selector: 'app-film',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.css']
})
export class FIlmComponent implements OnInit {
    public currentFilmResponse: MovieResponse; // Film en cours
    public currentFilmCredits: MovieCredits; // Film en cours
    public currentFilmVideos: MovieVideos;
    public crew: Crew;
    public casts: Cast[] = [];
    public director: PersonResponse;
    public trailer: Result;
    private id: string;

    // L'Id du film qui serai passé en paramètre dans le router
  
    constructor(private _route: ActivatedRoute, private _tmdb: TmdbService, private _sanitizer: DomSanitizer) {

    }

    ngOnInit() {
        console.log('Film : ', this._route.snapshot.params['id']);
        this.id = this._route.snapshot.params['id']; // On récupère l'id du film

        setTimeout(() =>
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
    }

    // Retourne l'URL complète du poster du film en cours

    getPath(path: string): string {
        return `https://image.tmdb.org/t/p/w500${path}`;
    }

    getPathVideo() {
        return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.trailer.key);
    }

}
