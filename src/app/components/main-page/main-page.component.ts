import {Component, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/users/user.service';
import {User} from 'firebase';
import {MovieResponse} from '../../tmdb-data/Movie';
import {Constant} from '../../constante/Constant';
import {PersonResponse} from '../../tmdb-data/Person';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

    @Output() movies: MovieResponse[] = [];
    @Output() persons: PersonResponse[] = [];
    public options = Constant.getGenres;
    public films: MovieResponse[] = [];
    public _persons: PersonResponse[] = [];

    constructor(private route: ActivatedRoute, private router: Router, private _userService: UserService) { }

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

}
