import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatSnackBar} from '@angular/material';
import {MovieResponse} from '../../tmdb-data/Movie';
import {List} from '../../tmdb-data/List';
import { TraitementFilmsService } from 'src/app/services/movies/traitement-films';
import { AddNewListComponent } from '../main-page/add-new-list/add-new-list.component';
import { DialogData } from '../main-page/main-page.component';

@Component({
  selector: 'app-dialog-add-film',
  templateUrl: './dialog-add-film.component.html',
  styleUrls: ['./dialog-add-film.component.css']
})
export class DialogAddFilmComponent implements OnInit {
  nameList: string;
  visibility: string="";
  ltmp : List;
  ifMyListEmpty:boolean;
  addClicked = false;

  constructor(public dialogRef: MatDialogRef<DialogAddFilmComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              public filmTraitement: TraitementFilmsService,public snackBar: MatSnackBar) {  
  }

  ngOnInit() {
    this.ifMyListEmpty=(this.filmTraitement.lists.length===0);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  displayMessage(message: string, secondParam: string) {
    this.snackBar.open(message, 'Fermer', {
      duration: 8000,
      horizontalPosition: "center",
      verticalPosition: "bottom"
    });
  }

  changeAddClicked(): void {

    this.addClicked = !this.addClicked;
    
    /* const dialogRef = this.dialog.open(AddNewListComponent, {
      width: '250px',
      data: {nameList: this.nameList,visibility: this.visibility}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.nameList = result;
      console.log('nom de la liste '+this.nameList);
      if(this.nameList != undefined){
        this.ltmp={id:this.filmTraitement.lists.length+1,
          name:this.nameList,films:[],visibility: this.visibility};
        this.ltmp.films.push(this.data.film);
        this.filmTraitement.lists.push(this.ltmp);       
      }
      this.nameList="";
    });*/
  } 

  addMovieInNewList(film: MovieResponse, myListName: string){
    if(myListName !== undefined && myListName !== ''){
      const newList = new List(this.filmTraitement.generateID(), myListName)
      newList.addFilm(film);
      this.filmTraitement.addList(newList);
      this.dialogRef.close();
      this.displayMessage("Votre film a été ajouté avec succès", "");
    }else{
      this.displayMessage("Donnez un nom à votre liste", "");
    }
    
  }

  public save(film: MovieResponse, list: List) {
    this.filmTraitement.addFilmToList(list, film);
    // list.(film);
    this.dialogRef.close();
    this.displayMessage("Votre film a été ajouté avec succès", "");
  }

}
