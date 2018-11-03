import {Component, OnInit} from '@angular/core';
import {Film} from '../../modeles/myModeles';
import {ActivatedRoute} from '@angular/router';
<<<<<<< HEAD
import {MovieResponse, MovieCredits, Crew, Cast} from '../../tmdb-data/Movie';
import {TmdbService} from '../../services/tmdb/tmdb.service';
import {PersonResponse} from '../../tmdb-data/Person';
=======
import {MovieResponse} from '../../tmdb-data/Movie';
import {TmdbService} from '../../services/tmdb/tmdb.service';
import {Constant} from '../../constante/Constant';
>>>>>>> origin/master

@Component({
    selector: 'app-film',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.css']
})
export class FIlmComponent implements OnInit {

<<<<<<< HEAD
    public currentFilmResponse: MovieResponse; // Film en cours
    public currentFilmCredits: MovieCredits; // Film en cours
    public  crew: Crew;
    public  casts: Cast[] = [];
    public  director: PersonResponse;
=======
    public currentFilm: MovieResponse; // Film en cours

>>>>>>> origin/master
    private id: string;

    // L'Id du film qui serai passé en paramètre dans le router

<<<<<<< HEAD
    constructor(private _route: ActivatedRoute, private tmdb: TmdbService) {
    }

    ngOnInit() {
        console.log('Film : ', this._route.snapshot.params['id']);
        this.id = this._route.snapshot.params['id']; // On récupère l'id du film

        setTimeout(() =>
                this.tmdb.init('384da4d1d38ad08447d757fb4629fa6b') // Clef de TMDB
                    .getMovieDetails(Number(this.id))
                    .then(([mr, mc]) => {
                      console.log('getFilm Response : ', mr);
                      console.log('getFilm crew : ', mc);
                         this.currentFilmResponse = mr;
                         this.currentFilmCredits = mc;
                         this.crew = mc.crew.find((elem) => elem.job === 'Director')
                      console.log('getFilm : ', this.currentFilmResponse);
                      this.tmdb.getPerson(this.crew.id).then((bio) => {
                        this.director = bio ;
                      });
                      mc.cast.forEach((cast) => {
                        console.log('cast ', cast)
                        this.casts.push(cast);
                      });
                      this.casts.splice(6);
                    })
                    .catch(err => console.error('Error getting movie:', err)),
            1000);


    }

    getPath(path: string): string {
        return `https://image.tmdb.org/t/p/w500${path}`;
=======
    constructor(private _route: ActivatedRoute, private _tmdb: TmdbService) {
    }

    ngOnInit() {

        // Récupère l'id du film sur lequel l'utilisateur a cliqué

        this.id = this._route.snapshot.params['id'];

        // Récupération du film par son id

        setTimeout(() =>
                this._tmdb.getMovie(Number(this.id))
                    .then((m: MovieResponse) => {
                        this.currentFilm = m;
                    })
                    .catch(err => console.error('Error getting movie:', err)),
            1000);
    }


    // Retourne l'URL complète du poster du film en cours

    getPath(path: string): string {
        return `${Constant.imageBaseURL}${path}`;
>>>>>>> origin/master
    }

}
