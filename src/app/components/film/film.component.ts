import {Component, OnInit} from '@angular/core';
import {Film} from '../../modeles/myModeles';
import {ActivatedRoute} from '@angular/router';
import {MovieResponse} from '../../tmdb-data/Movie';
import {TmdbService} from '../../services/tmdb/tmdb.service';

@Component({
    selector: 'app-film',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.css']
})
export class FIlmComponent implements OnInit {

    public currentFilm: MovieResponse; // Film en cours
    private id: string;

    // L'Id du film qui serai passé en paramètre dans le router

    constructor(private _route: ActivatedRoute, private tmdb: TmdbService) {
    }

    ngOnInit() {
        console.log('Film : ', this._route.snapshot.params['id']);
        this.id = this._route.snapshot.params['id']; // On récupère l'id du film

        setTimeout(() =>
                this.tmdb.init('384da4d1d38ad08447d757fb4629fa6b') // Clef de TMDB
                    .getMovie(Number(this.id))
                    .then((m: MovieResponse) => {
                        this.currentFilm = m;
                        console.log("genre du film selectionne");
                        for(let i in this.currentFilm.genres){
                            console.log(this.currentFilm.genres[i].name);
                        }
                        
                        
                    })
                    .catch(err => console.error('Error getting movie:', err)),
            1000);


    }

    getPath(path: string): string {
        return `https://image.tmdb.org/t/p/w500${path}`;
    }

}
