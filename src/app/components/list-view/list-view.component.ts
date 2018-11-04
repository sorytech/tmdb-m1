import {Component, Input, OnInit} from '@angular/core';
import {MovieResponse} from '../../tmdb-data/Movie';
import {TmdbService} from '../../services/tmdb/tmdb.service';
import {TraitementFilms} from '../../services/movies/traitement-films';

@Component({
    selector: 'app-list-view',
    templateUrl: './list-view.component.html',
    styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

    @Input() films: MovieResponse[] = [];

    private _valueToResearch = '';

    constructor(private _tmdb: TmdbService, private _filmTraitment: TraitementFilms) {
    }

    ngOnInit() {
        this._loadMovies();
        /**
         * Récupère la valeur de la barre de recherche et met à jour la liste de films
         */
        this._tmdb.subject.subscribe((data) => {
            this.valueToResearch = data;
        });

        this._tmdb.clickRealisators = false;
        this._filmTraitment.checkedGenresReceived.subscribe((genres) => {
            if (genres.length > 0) {
                this.films = this._filmTraitment.filter(genres);
            } else {
                this._loadMovies();
            }
        });
    }

    private _loadMovies() {
        this._tmdb.getPopularMovies()
            .subscribe((movie: any[]) => {
                    this.films = movie['results'];
                    this._filmTraitment.movies = this.films;
                },
                (error) => {
                    console.log('Erreur lors du téléchargement : ', error);
                }
            );
    }

    get valueToResearch(): string {
        return this._valueToResearch;
    }

    @Input()
    set valueToResearch(value: string) {
        this._valueToResearch = value;
    }
}
