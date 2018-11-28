import {Component, Input, OnInit} from '@angular/core';
import {TraitementFilmsService} from 'src/app/services/movies/traitement-films';
import {MovieResponse, Crew, MovieCredits} from 'src/app/tmdb-data/Movie';
import {PersonResponse} from 'src/app/tmdb-data/Person';
import {TmdbService} from 'src/app/services/tmdb/tmdb.service';

@Component({
    selector: 'app-liste-realisateurs',
    templateUrl: './liste-realisateurs.component.html',
    styleUrls: ['./liste-realisateurs.component.css']
})
export class ListeRealisateursComponent implements OnInit {

    public realisateurs: PersonResponse[] = [];
    public movies: MovieResponse[] = [];
    public crew: Crew;
    showSpinner = true;
    private _valueToResearch: string;

    constructor(private tmdbs: TmdbService) {
    }

    ngOnInit() {
        this.tmdbs.clickRealisators = true;
        this.loadRealisators();
    }

    /* pour récuperer les réalisateurs, il faut d'abord avoir les films.
    On fait donc une requete pour obtenir les films populaires et pour chaque film,
    on récupère ses crédits
    */
    loadRealisators() {
        this.tmdbs.getPopularMovies()
            .subscribe((movie: any[]) => {
                    this.movies = movie['results'];

                    this.movies.forEach((currentMovie) => {
                        // this.idCurrentMovie = currentMovie.id;
                        // const title = currentMovie.title;
                        this.tmdbs.getCredits(currentMovie.id).then((mc: MovieCredits) => {
                            this.crew = mc.crew.find((elem) => elem.job === 'Director');
                            this.tmdbs.getPerson(this.crew.id)
                                .then((r: PersonResponse) => {
                                    r.title_movie = currentMovie.title;
                                    this.realisateurs.push(r);
                                })
                                .catch(err => console.log('error getting realisator', err));
                        })
                            .catch(err => console.error('error getting credits:', err));
                    });

                    this.showSpinner = false;
                },
                (error) => {
                    console.log('Impossible de récuperer les films ', error);
                });

        this.tmdbs.subject.subscribe((data) => {
            this.valueToResearch = data;
        });
    }

    get valueToResearch(): string {
        return this._valueToResearch;
    }

    @Input()
    set valueToResearch(value: string) {
        this._valueToResearch = value;
    }

}
