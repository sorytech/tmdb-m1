import {Component, OnInit, Output} from '@angular/core';
import {TraitementFilms} from 'src/app/services/movies/traitement-films';
import {UserService} from '../../services/users/user.service';
import {auth, User} from 'firebase';
import { MovieGenre } from 'src/app/tmdb-data/Movie';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';
import { Constant } from 'src/app/constante/Constant';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit { 

    listeGenres : string[]=[];

    tableauGenres : MovieGenre[]=[];
    click = false;
    selected = '';
    options:{label:string, value:string,checked:boolean}[] = Constant.options;

    constructor(private tmdbs: TmdbService, private _userSercive: UserService,private filmsts:TraitementFilms) {
    }
    ngOnInit() { }

    /* Dans la fonction addGenre(), on ajoute la valeur cochée dans un tableau de string
      l'ajout est fait ssi la valeur n'existe pas dans le tableau. Elle est supprimée si elle 
      existe. Nous créons aussi un genre {id,name} qui correspond à la case cochée. 
      Cette variable sera ajoutée dans un tableau de genres {id,name}[] qui nous permettra de faire
      le filtre en fonction des genres qu'on a sélectionné.
      Vu que le filtre est fait dans le service traitement-films, nous y avons donc une variable
      de type MovieGenre[] qui est initialisée avec la valeur tableauGenres.

      Le filtre est effectué seulement si on se trouve dans l'onglet films

      */
    addGenre(value : string){
        if(!(this.tmdbs.clickRealisators)){
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

    }

    /* resetAllCheckboxes() est une fonction qui nous permet de décocher toutes les cases
    à chaque fois qu'on change d'onglet */
    resetAllCheckboxes() {
        this.options.forEach((item) => {
          item.checked = false;
        })
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
