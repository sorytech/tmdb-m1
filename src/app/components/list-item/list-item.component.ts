<<<<<<< HEAD
import {Component, Input, OnInit} from '@angular/core';
import {Cast, Crew, MovieCredits, MovieGenre, MovieResponse} from 'src/app/tmdb-data/Movie';
import {TmdbService} from 'src/app/services/tmdb/tmdb.service';
import {DialogAddFilmComponent} from '../dialog-add-film/dialog-add-film.component';
import {MatDialog} from '@angular/material';
import {TraitementFilmsService} from '../../services/movies/traitement-films';
import {List} from '../../tmdb-data/List';
=======
import { Component, Input, OnInit } from '@angular/core';
import { MovieResponse, MovieGenre, Crew, MovieCredits, Cast } from 'src/app/tmdb-data/Movie';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';
>>>>>>> 1bb82f7e3c3b6b520b2a28e93cf268872877ad96

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

<<<<<<< HEAD
    @Input() film: MovieResponse;

    public current: MovieResponse = {};

    public genresResults: MovieGenre[];
    public currentFilmCredits: MovieCredits;
    public crew: Crew;
    public casts: Cast[] = [];
    public onHover = false;
    public lists: List[] = [];

    constructor(private tmdb: TmdbService, private _dialog: MatDialog, private _tfService: TraitementFilmsService) { }

    ngOnInit() {
        this.lists = this._tfService.lists;
        this.tmdb.getMovieDetails(Number(this.film.id))
            .then(([mr, mc]) => {
                this.current = mr;
                this.currentFilmCredits = mc;
                this.crew = mc.crew.find((elem) => elem.job === 'Director');
                this.casts = mc.cast;
                this.casts.splice(3);
            }).catch(err => console.error('Error getting movie:', err));
    }

    openDialog(currentFilm: MovieResponse, lists: List[]): void {
        const dialogRef = this._dialog.open(DialogAddFilmComponent, {
            width: '600px',
            data: {film: currentFilm, lists: lists}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed : ', result);
        });
    }
=======
  @Input() film: MovieResponse;

  public current : MovieResponse={};
  
  public genresResults : MovieGenre[];
  currentFilmCredits: MovieCredits;
  crew: Crew;
  casts: Cast[]=[];

  constructor(private tmdb: TmdbService) { }

  ngOnInit() {
    this.tmdb.getMovieDetails(Number(this.film.id))
    .then(([mr, mc]) => {
      this.current = mr;
      this.currentFilmCredits = mc;
      this.crew = mc.crew.find((elem) => elem.job === 'Director');
      mc.cast.forEach((cast) => {
        this.casts.push(cast);
      });
      this.casts.splice(3);
    }).catch(err => console.error('Error getting movie:', err))
  }
>>>>>>> 1bb82f7e3c3b6b520b2a28e93cf268872877ad96
}
