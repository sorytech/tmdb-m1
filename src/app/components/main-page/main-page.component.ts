import {Component, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/users/user.service';
import {User} from 'firebase';
import {MovieResponse, Option} from '../../tmdb-data/Movie';
import {Constant} from '../../constante/Constant';
import {TmdbService} from '../../services/tmdb/tmdb.service';
import {TraitementFilms} from '../../services/movies/traitement-films';
import {PersonResponse} from '../../tmdb-data/Person';
import {List} from '../../tmdb-data/List';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

    public options = Constant.getGenres;

    public checkedGenres: Option[] = [];

    public lists: List[] = [
        {id: '01', name: 'Famille', films_id: []},
        {id: '02', name: 'Scool', films_id: []},
        {id: '04', name: 'Professionelle', films_id: []},
        {id: '03', name: 'Mes amis', films_id: []},
        {id: '05', name: 'Autres', films_id: []},
    ];

    constructor(private _userService: UserService,
                private _tmdb: TmdbService, private _filmTraitment: TraitementFilms) {
    }

    ngOnInit() {
    }

    formatLabel(value: number | null) {
        if (!value) {
            return 0;
        }

        if (value >= 1000) {
            return Math.round(value / 1000);
        }

        return value;
    }

    private _getUser() {
        return this._userService.getInstance();
    }

    login() {
        this._getUser().login();
    }

    logout() {
        this._getUser().logout();
    }

    user(): User {
        return this._userService.user;
    }

    /**
     * resetAllCheckboxes() est une fonction qui nous permet de décocher toutes les cases
     à chaque fois qu'on change d'onglet
     */
    resetAllCheckboxes() {
        this.options.forEach((item) => item.checked = false);
    }

    addGenre(option: Option) {
        if (!this._tmdb.clickRealisators) {
            if (this.checkedGenres.includes(option)) {
                this.checkedGenres.splice(this.checkedGenres.indexOf(option), 1);
            } else {
                this.checkedGenres.push(option);
            }
            this._filmTraitment.checkedGenresReceived.next(this.checkedGenres);
        }
    }
}
