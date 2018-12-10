import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MovieResponse} from '../../tmdb-data/Movie';
import {List} from '../../tmdb-data/List';
import { TraitementFilmsService } from 'src/app/services/movies/traitement-films';
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
              public filmTraitement: TraitementFilmsService) {  
  }

  ngOnInit() {
    this.ifMyListEmpty=(this.filmTraitement.lists.length===0);
    this.data.nameList='';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changeAddClicked(): void {
    this.addClicked = !this.addClicked;
  } 

  addMovieInNewList(film: MovieResponse, myListName: string,visibility:string){
    if(myListName.trim() !== '' && myListName !== undefined){
      const newList = new List(this.filmTraitement.generateID(), myListName, visibility); 
      newList.addFilm(film);
      this.filmTraitement.addList(newList);
      
      this.dialogRef.close();
      console.log("visibilité "+visibility);
      this.filmTraitement.openMessageDialog("Votre film a été ajouté avec succès");
    }else{
      this.filmTraitement.displayMessage("Erreur : Veuillez saisir le nom de la liste !", "Fermer");
      this.data.nameList='';

    }
    
  }

  public save(film: MovieResponse, list: List) {
    this.filmTraitement.addFilmToList(list, film);
    this.dialogRef.close();
    this.filmTraitement.openMessageDialog("Votre film a été ajouté avec succès");
  }

}
