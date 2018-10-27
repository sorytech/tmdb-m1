import {Component, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {FilmService} from '../../services/movies/film.service';
import {UserService} from '../../services/users/user.service';
import {auth, User} from 'firebase';
import { MovieResponse } from 'src/app/tmdb-data/Movie';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

    films: MovieResponse[] = [];

    static tableau : Observable<String[]>;
    static tableGenres : String[]=[];

    @Output() movies: MovieResponse[] = [];

    images: any[] = [];

    click = false;

    selected = '';

    constructor(private _FService: FilmService, private route: ActivatedRoute, private router: Router, private _userSercive: UserService) {
    }
    ngOnInit() {
        /* pourquoi la méthode getPopularMovies est appelée ici ? */
        this._FService.getPopularMovies()
        .subscribe((movie: any[]) => {
            this.movies = movie['results'];
            },
            (error) => console.log(error)
        );
    }
    createObserver(observer) {
        for(let i in MainPageComponent.tableGenres){
            observer.next(MainPageComponent.tableGenres[i]);
        }
        observer.complete(); 
    }
    /* Dans la fonction addGenre, appeler une methode qui filtre tous les 
    films populaires en fonction des genres qu'on a dans le tableau tableGenres 
    et réafficher les résultats obtenus. Définir la méthode filterMovies dans les 
    services et l'utilisée dans le composant list-view. J'ai aussi déclaré le tableau 
    des genres comme static pour l'utiliser comme paramètre dans le composant list-view.
    filterMovies(myMovies : MovieResponse[], genres: String[],options?: MovieQuery) */
    addGenre(value : String){
        if((MainPageComponent.
            tableGenres.includes(value))){
            const index: number = MainPageComponent.tableGenres.indexOf(value);
            if (index !== -1) {
                MainPageComponent.tableGenres.splice(index, 1);
            }  
            MainPageComponent.tableGenres.splice;
        }else{
            MainPageComponent.tableGenres.push(value);
        }
        MainPageComponent.tableau = new Observable()
        console.log("le tableau genre",MainPageComponent.tableGenres);
        for(let i in MainPageComponent.tableGenres){
            console.log("les genres du tableau",MainPageComponent.tableGenres[i]);
        }
    }

    tableau = new Observable(this.createObserver); 

    selectedReceiver(event) {
        console.log('JE suis là !!! : ', event.value)
        this.click = true
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

    private _getUser () {
        return this._userSercive.getInstance();
    }

    login() {
        this._getUser().login();
    }

    logout() {
        this._getUser().logout();
    }

    user(): User {
        return this._userSercive.user;
    }

}
