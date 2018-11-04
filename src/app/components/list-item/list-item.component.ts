import {Component, Input, OnInit} from '@angular/core';
import {Cast, Crew, MovieCredits, MovieGenre, MovieResponse} from 'src/app/tmdb-data/Movie';
import {TmdbService} from 'src/app/services/tmdb/tmdb.service';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

    @Input() film: MovieResponse;

    public current: MovieResponse = {};

    public genresResults: MovieGenre[];
    currentFilmCredits: MovieCredits;
    crew: Crew;
    casts: Cast[] = [];

    constructor(private tmdb: TmdbService) { }

    ngOnInit() {

        this.tmdb.getMovieDetails(Number(this.film.id))
            .then(([mr, mc]) => {
                this.current = mr;
                this.currentFilmCredits = mc;
                this.crew = mc.crew.find((elem) => elem.job === 'Director');
                this.casts = mc.cast;
                this.casts.splice(3);
            }).catch(err => console.error('Error getting movie:', err));
    }
}
