import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material';
import {MovieResponse} from '../../tmdb-data/Movie';
import {List} from '../../tmdb-data/List';
import { TraitementFilmsService } from 'src/app/services/movies/traitement-films';
import { AddNewListComponent } from '../main-page/add-new-list/add-new-list.component';

@Component({
  selector: 'app-dialog-add-film',
  templateUrl: './dialog-add-film.component.html',
  styleUrls: ['./dialog-add-film.component.css']
})
export class DialogAddFilmComponent implements OnInit {
  nameList: string;
  visibility: string;
  ltmp : List;
  ifMyListEmpty:boolean;
  constructor(public dialogRef: MatDialogRef<DialogAddFilmComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public filmTraitement: TraitementFilmsService,public dialog: MatDialog) {  
  }

  ngOnInit() {
    this.ifMyListEmpty=(this.filmTraitement.lists.length===0);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  openDialog1(): void {
    const dialogRef = this.dialog.open(AddNewListComponent, {
      width: '250px',
      data: {nameList: this.nameList,visibility: this.visibility}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.nameList = result;
      console.log('nom de la liste '+this.nameList);
      if(this.nameList != undefined){
        this.ltmp={id:this.filmTraitement.lists.length+1,name:this.nameList,films:[],visibility: this.visibility};
        this.ltmp.films.push(this.data.film);
        this.filmTraitement.lists.push(this.ltmp); 
        console.log("film "+this.data.film.title);
        console.log("liste "+this.ltmp.id);
        console.log("nb film de la liste "+this.ltmp.films.length); 
        console.log("visibilité : "+this.ltmp.visibility);         
      }

      this.nameList="";

    });
  }

  public save(film: MovieResponse, list: List) {
    list.films.push(film);
    this.dialogRef.close();
    console.log("film "+film.title);
    console.log("liste "+list.id);
    console.log("nb film de la liste "+list.films.length);
  }
}
