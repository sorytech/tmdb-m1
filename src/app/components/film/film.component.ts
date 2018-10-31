import {Component, OnInit} from '@angular/core';
import {Film} from '../../modeles/myModeles';
import {ActivatedRoute} from '@angular/router';
import {MovieResponse} from '../../tmdb-data/Movie';
import {TmdbService} from '../../services/tmdb/tmdb.service';
import {Constant} from '../../constante/Constant';

@Component({
    selector: 'app-film',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.css']
})
export class FIlmComponent implements OnInit {

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
    }

}
