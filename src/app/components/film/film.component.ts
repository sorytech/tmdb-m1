import {Component, OnInit} from '@angular/core';
import {Film} from '../../modeles/myModeles';
import {ActivatedRoute} from '@angular/router';
import {MovieResponse, MovieCredits, Crew, Cast} from '../../tmdb-data/Movie';
import {TmdbService} from '../../services/tmdb/tmdb.service';
import {PersonResponse} from '../../tmdb-data/Person';

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
    private id: string;

    // L'Id du film qui serai passé en paramètre dans le router

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
                      this.tmdb.getPerson(this.crew.id).then((realisateur) => {
                        this.director = realisateur ;
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
    }

}
