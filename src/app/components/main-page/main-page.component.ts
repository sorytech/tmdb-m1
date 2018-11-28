import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/users/user.service';
import {User} from 'firebase';
import {Option} from '../../tmdb-data/Movie';
import {Constant} from '../../constante/Constant';
import {TmdbService} from '../../services/tmdb/tmdb.service';
import {TraitementFilmsService} from '../../services/movies/traitement-films';
import {List} from '../../tmdb-data/List';

import {MatDialog} from '@angular/material';
import { AddNewListComponent } from './add-new-list/add-new-list.component';

export interface DialogData {
    nameList: string;
    visibility: string;
  }

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

    public options = Constant.getGenres;

    public checkedGenres: Option[] = [];

    public lists: List[]=[];
    
    nameList: string;
    visibility: string;

    constructor(private _userService: UserService,
                private _tmdb: TmdbService, private _filmTraitment: TraitementFilmsService, 
                public dialog: MatDialog) {
    }

    ngOnInit() {
        this.lists=this._filmTraitment.lists;
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

    openDialog(): void {
        const dialogRef = this.dialog.open(AddNewListComponent, {
          width: '280px',
          data: {nameList: this.nameList,visibility:this.visibility}
        });
        
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed', result);
          this.nameList = result;
          console.log('nom de la liste '+this.nameList);
          console.log('visibilité : '+this.visibility);
          if(this.nameList != undefined){
            this.lists.push({id:this.lists.length+1,name:this.nameList,films:[],visibility:this.visibility});           
          }
          this.nameList="";
          this._filmTraitment.setLists(this.lists);
          this.lists=this._filmTraitment.lists;
        });
    } 
    

}