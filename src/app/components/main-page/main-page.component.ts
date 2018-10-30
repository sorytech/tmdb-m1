import {Component, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FilmService} from 'src/app/services/movies/film.service';
import {UserService} from '../../services/users/user.service';
import {auth, User} from 'firebase';
import { MovieResponse, MovieGenre } from 'src/app/tmdb-data/Movie';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';
import { ListViewComponent } from '../list-view/list-view.component';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit { 

    listeGenres : string[]=[];

    tableauGenres : MovieGenre[]=[];

    lvc : ListViewComponent;
    click = false;

    selected = '';

    constructor(private tmdbs: TmdbService, private route: ActivatedRoute, private router: Router, private _userSercive: UserService,private filmsts:FilmService) {
    }
    ngOnInit() {}

    /* Dans la fonction addGenre,  */
    addGenre(value : string){
        if((this.listeGenres.includes(value))){
            const index: number = this.listeGenres.indexOf(value);
            if (index !== -1) {
                this.listeGenres.splice(index, 1);
            }
            /* pour éviter les répétitions */
            this.tableauGenres = this.tableauGenres.filter(function( obj ) {
                return obj.name !== value;
            });  
        }else{
            let Id:number=0;
            let Name: string='';
            switch(value){
                case 'Action': Id = 28;
                    break;
                case 'Drama': Id = 18;
                    break;
                case 'Comedy': Id = 35;
                    break;
                default: Id = 878;
            }
            Name=value;
            this.tableauGenres.push({id:Id,name:Name});
            this.listeGenres.push(value);
        }
            
        this.filmsts.tableGenres = this.tableauGenres;
        this.filmsts.setGenres(this.listeGenres);
        this.filmsts.genresCoches();

    }

    getTableauGenres():MovieGenre[]{
        return this.tableauGenres
    }

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
