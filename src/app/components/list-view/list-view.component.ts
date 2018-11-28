<<<<<<< HEAD
import {Component, Input, OnInit} from '@angular/core';
import {MovieResponse} from '../../tmdb-data/Movie';
import {PersonResponse} from '../../tmdb-data/Person';
import {TmdbService} from '../../services/tmdb/tmdb.service';
import {TraitementFilmsService} from '../../services/movies/traitement-films';
=======
import {Component, OnInit} from '@angular/core';
import { MovieResponse } from 'src/app/tmdb-data/Movie';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';
import { Subscription } from 'rxjs';
import { TraitementFilms } from 'src/app/services/movies/traitement-films';
>>>>>>> 1bb82f7e3c3b6b520b2a28e93cf268872877ad96

@Component({
    selector: 'app-list-view',
    templateUrl: './list-view.component.html',
    styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

<<<<<<< HEAD
    @Input() films: MovieResponse[] = [];

    private _valueToResearch = '';

    constructor(private _tmdb: TmdbService, private _filmTraitment: TraitementFilmsService) {
=======
    films: MovieResponse[];
 
    subscription : Subscription;
    showSpinner: boolean = true;
    
    constructor(private tmdbs: TmdbService,private filmsts:TraitementFilms) {
>>>>>>> 1bb82f7e3c3b6b520b2a28e93cf268872877ad96
    }
    ngOnInit() {
<<<<<<< HEAD
        this._loadMovies();
        /**
         * Récupère la valeur de la barre de recherche et met à jour la liste de films
         */

        this._tmdb.subject.subscribe((data) => {
            this.valueToResearch = data;
            if (this.valueToResearch === '') {
                this._tmdb.getPopularMovies()
                    .subscribe((movie: any[]) => {
                            this.films = movie['results'];
                        },
                        (error) => {
                            console.log('Erreur lors du téléchargement : ', error);
                        }
                    );
            } else {
                this._tmdb.getMovieByName(this.valueToResearch.toString())
                    .subscribe((movie: any[]) => {
                        this.films = movie['results'];
                    });
            }
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
=======
        this.tmdbs.clickRealisators = false;
        this.loadMovies();
        this.subscription = this.filmsts.sub.subscribe( g => {          
            if(g.length !== 0){                
                this.films = this.filmsts.filterMovies(this.filmsts.getGenresChecked()); 
                console.log("les films filtrés",this.films);                            
            }else{
                this.loadMovies();
            }                 
        });
        
    }

    loadMovies(){
        this.tmdbs.getPopularMovies()
            .subscribe((movie: any[]) => {
                this.films = movie['results'];
                this.showSpinner=false;
                this.filmsts.setMovies(this.films);

            },
            (error) => {
                console.log('Impossible de récuperer les films ', error);
            }
        );
    }
    
>>>>>>> 1bb82f7e3c3b6b520b2a28e93cf268872877ad96
}
