import {Component, Input, OnInit} from '@angular/core';
import {Cast, Crew, MovieCredits, MovieGenre, MovieResponse} from 'src/app/tmdb-data/Movie';
import {TmdbService} from 'src/app/services/tmdb/tmdb.service';
import {DialogAddFilmComponent} from '../dialog-add-film/dialog-add-film.component';
import {MatDialog} from '@angular/material';
import {TraitementFilmsService} from '../../services/movies/traitement-films';
import {List} from '../../tmdb-data/List';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { RemoveMovieComponent } from '../remove-movie/remove-movie.component';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

    @Input() film: MovieResponse;

    public current: MovieResponse = {};
    public genresResults: MovieGenre[];
    public currentFilmCredits: MovieCredits;
    public crew: Crew;
    public casts: Cast[] = [];
    public onHover = false;
    public lists: List[] = [];
    public ifCustomList = false;
    public _url: UrlSegment[]=[];
    public list: List;


    constructor(private tmdb: TmdbService, private _dialog: MatDialog, 
        private _tfService: TraitementFilmsService, private _route: ActivatedRoute) { }

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
        this._url = this._route.snapshot.url;
        this.list=this._tfService.getListFromId(this._route.snapshot.params['id']);
        if( (this._url.length > 0 )&& (this._url[0].path==='myCustomList')){
            this.ifCustomList = true;
        }
    }

    openDialog(currentFilm: MovieResponse, lists: List[]): void {
        const dialogRef = this._dialog.open(DialogAddFilmComponent, {
            width: '600px',
            data: {film: currentFilm, lists: lists}
        });
    }

    openDialogForRemoveMovie(currentFilm: MovieResponse): void{
        const dialogRef = this._dialog.open(RemoveMovieComponent, {
            width: '450px',
            data: {film: currentFilm}
        });
        this._tfService.setListTmp(this.list);
        dialogRef.afterClosed().subscribe(result => {
        });
    }
}
