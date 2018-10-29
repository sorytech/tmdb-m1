import {Component, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FilmService} from '../../services/movies/film.service';
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

    constructor(private tmdbs: TmdbService, private route: ActivatedRoute, private router: Router, private _userSercive: UserService) {
    }
    ngOnInit() {
        /* pourquoi la méthode getPopularMovies est appelée ici ? 
        this._FService.getPopularMovies()
        .subscribe((movie: any[]) => {
            this.movies = movie['results'];
            },
            (error) => console.log(error)
        );
        this.tmdbs.init('384da4d1d38ad08447d757fb4629fa6b')
            .getPopular()
            .then((movie: any[]) => {
                MainPageComponent.movies = movie['results'];
                },
                (error) => console.log('Erreur lors du téléchargement : ', error)
            );
            console.log("yes");*/
            
    }

    /* Dans la fonction addGenre, appeler une methode qui filtre tous les 
    films populaires en fonction des genres qu'on a dans le tableau tableGenres 
    et réafficher les résultats obtenus. Définir la méthode filterMovies dans les 
    services et l'utilisée dans le composant list-view. J'ai aussi déclaré le tableau 
    des genres comme static pour l'utiliser comme paramètre dans le composant list-view.
    filterMovies(myMovies : MovieResponse[], genres: String[],options?: MovieQuery) */
    addGenre(value : string){
        if((this.listeGenres.includes(value))){
            const index: number = this.listeGenres.indexOf(value);
            if (index !== -1) {
                this.listeGenres.splice(index, 1);
            }
            /* pour éviter les répétitions */
            this.tmdbs.tableGenres = this.tmdbs.tableGenres.filter(function( obj ) {
                return obj.name !== value;
            });  
        }else{
            let Id:number=0;
            let Name: string='';
            switch(value){
                case 'Action': Id = 28;
                    console.log("Action");
                    break;
                case 'Drama': Id = 18;
                    console.log("Drama");
                    break;
                case 'Comedy': Id = 35;
                    console.log("Comedy");
                    break;
                default: Id = 878;
                console.log("scy-fy");
            }
            
            Name=value;
            console.log("voir le genre",{id: Id,name:Name});
            this.tmdbs.tableGenres.push({id: Id,name:Name});
            this.listeGenres.push(value);

            this.tmdbs.genresChoisis = this.listeGenres;
            

        }
        
       
        this.lvc = new ListViewComponent(this.tmdbs,this.route,this.router);
        this.lvc.update();

        console.log("le tableau genre",this.listeGenres);
        console.log("les genres ajoutés",this.tmdbs.tableGenres);

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
