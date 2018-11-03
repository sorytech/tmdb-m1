import {Component, OnInit, Output} from '@angular/core';
<<<<<<< HEAD
import {Observable} from 'rxjs';
import {Film} from '../../modeles/myModeles';
import {ActivatedRoute, Router} from '@angular/router';
import {FilmService} from '../../services/movies/film.service';
import {UserService} from '../../services/users/user.service';
import {auth, User} from 'firebase';
=======
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/users/user.service';
import {User} from 'firebase';
import {MovieResponse} from '../../tmdb-data/Movie';
import {Constant} from '../../constante/Constant';
>>>>>>> origin/master

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

<<<<<<< HEAD
    films: Film[] = [];

    @Output() movies: Film[] = [];

    images: any[] = [];

    click = false;

    selected = '';

    constructor(private _FService: FilmService, private route: ActivatedRoute, private router: Router, private _userSercive: UserService) {
    }

    ngOnInit() {
        this._FService.getPopularMovies()
        .subscribe((movie: any[]) => {
            this.movies = movie['results'];
            },
            (error) => console.log(error)
        );
    }
    selectedReceiver(event) {
        console.log('JE suis là !!! : ', event.value)
        this.click = true
=======
    @Output() movies: MovieResponse[] = [];
    public options = Constant.getGenres;
    public films: MovieResponse[] = [];

    constructor(private route: ActivatedRoute, private router: Router, private _userService: UserService) { }

    ngOnInit() {
>>>>>>> origin/master
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

<<<<<<< HEAD
    private _getUser () {
        return this._userSercive.getInstance();
=======
    private _getUser() {
        return this._userService.getInstance();
>>>>>>> origin/master
    }

    login() {
        this._getUser().login();
    }

    logout() {
        this._getUser().logout();
    }

    user(): User {
<<<<<<< HEAD
        return this._userSercive.user;
=======
        return this._userService.user;
>>>>>>> origin/master
    }

}
