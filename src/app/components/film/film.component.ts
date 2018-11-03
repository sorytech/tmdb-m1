import {MovieResponse, MovieCredits, Crew, Cast} from '../../tmdb-data/Movie';
import {TmdbService} from '../../services/tmdb/tmdb.service';
import {PersonResponse} from '../../tmdb-data/Person';
import {Constant} from '../../constante/Constant';
import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-film',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.css']
})
export class FIlmComponent implements OnInit {


    public currentFilmResponse: MovieResponse; // Film en cours
    public currentFilmCredits: MovieCredits; // Film en cours
    public  crew: Crew;
    public  casts: Cast[] = [];
    public  director: PersonResponse;

    public currentFilm: MovieResponse; // Film en cours

    private id: string;

    // L'Id du film qui serai passé en paramètre dans le router


    constructor(private _route: ActivatedRoute, private _tmdb: TmdbService) {
    }

    ngOnInit() {

        // Récupère l'id du film sur lequel l'utilisateur a cliqué

        this.id = this._route.snapshot.params['id'];

        // Récupération du film par son id

        setTimeout(() =>
                this._tmdb.getMovieDetails(Number(this.id))
                  .then(([mr, mc]) => {
                    console.log('getFilm Response : ', mr);
                    console.log('getFilm crew : ', mc);
                    this.currentFilmResponse = mr;
                    this.currentFilmCredits = mc;
                    this.crew = mc.crew.find((elem) => elem.job === 'Director')
                    console.log('getFilm : ', this.currentFilmResponse);
                    this._tmdb.getPerson(this.crew.id).then((bio) => {
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
    // Retourne l'URL complète du poster du film en cours
    getPath(path: string): string {
        return `${Constant.imageBaseURL}${path}`;
    }

}
