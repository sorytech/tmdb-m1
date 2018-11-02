import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MovieResponse} from '../../tmdb-data/Movie';
import {PersonResponse} from '../../tmdb-data/Person';
import {TmdbService} from '../../services/tmdb/tmdb.service';

@Component({
    selector: 'app-list-view',
    templateUrl: './list-view.component.html',
    styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

    @Input() films: MovieResponse[] = [];
   /**  @Input() acteurs: PersonResponse[] = [];*/

    private _valueToResearch = '';

    constructor(private _tmdb: TmdbService, private router: Router) { }

    ngOnInit() {
        this._tmdb.getPopularMovies()
            .subscribe((movie: any[]) => {
                    this.films = movie['results'];
                },
                (error) => {
                    console.log('Erreur lors du téléchargement : ', error);
                }
            );


        /** this._tmdb.getPopularPerson()
            .subscribe((person: any[]) => {
                    this.acteurs = person['results'];
                },
                (error) => {
                    console.log('Erreur lors du téléchargement : ', error);
                }
            );*/

        /**
         * Récupère la valeur de la barre de recherche et met à jour la liste de films
         */
       /** this._tmdb.subject.subscribe((data) => {
            this.valueToResearch = data;
        });*/ 
    }

    get valueToResearch(): string {
        return this._valueToResearch;
    }

    @Input()
    set valueToResearch(value: string) {
        this._valueToResearch = value;
    }
}
