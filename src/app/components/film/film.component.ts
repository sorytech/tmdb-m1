import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieResponse, MovieCredits, Crew, Cast} from '../../tmdb-data/Movie';
import {TmdbService} from '../../services/tmdb/tmdb.service';
import { PersonResponse } from 'src/app/tmdb-data/Person';

@Component({
    selector: 'app-film',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.css']
})
export class FIlmComponent implements OnInit {

    public currentFilmResponse: MovieResponse; // Film en cours
    private id: string;
    showSpinner : boolean=true;

    // L'Id du film qui sera passé en paramètre dans le router

    constructor(private _route: ActivatedRoute, private tmdb: TmdbService) {
    }

    ngOnInit() {
        console.log('Film : ', this._route.snapshot.params['id']);
        this.id = this._route.snapshot.params['id']; // On récupère l'id du film
        setTimeout(() =>
            this.tmdb.init('384da4d1d38ad08447d757fb4629fa6b') // Clef de TMDB
            .getMovie(Number(this.id))
            .then((m: MovieResponse) => {
                this.currentFilmResponse = m;
                this.showSpinner=false;
            })
            .catch(err => console.error('Error getting movie:', err)),
        1000);
        

    }

    getPath(path: string): string {
        return `https://image.tmdb.org/t/p/w500${path}`;
    }

}
