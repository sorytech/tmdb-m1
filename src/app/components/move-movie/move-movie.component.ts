import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DialogData } from '../main-page/main-page.component';
import { ActivatedRoute } from '@angular/router';
import { TraitementFilmsService } from 'src/app/services/movies/traitement-films';
import { List } from 'src/app/tmdb-data/List';
import { MovieResponse } from 'src/app/tmdb-data/Movie';
import { DialogAddFilmComponent } from '../dialog-add-film/dialog-add-film.component';
import { AddNewListComponent } from '../main-page/add-new-list/add-new-list.component';

@Component({
  selector: 'app-move-movie',
  templateUrl: './move-movie.component.html',
  styleUrls: ['./move-movie.component.css']
})
export class MoveMovieComponent implements OnInit {

  private id: string;
  public list: List;
  public lists: List[]=[];
  nameList: string;
  visibility: string;
  ltmp : List;
  
  constructor(public dialogRef: MatDialogRef<MoveMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ,public dialog: MatDialog,
    private _route: ActivatedRoute,private _filmTraitment: TraitementFilmsService) {}


  ngOnInit() {}


  moveMovie(currentFilm: MovieResponse, listDestination?: List ){
      this._filmTraitment.update(currentFilm,this.data.listOrigin, listDestination)
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
        this.ltmp={id:this._filmTraitment.lists.length+1,
          name:this.nameList,films:[],visibility: this.visibility};
        this.ltmp.films.push(this.data.film);
        this._filmTraitment.lists.push(this.ltmp); 
        console.log("film "+this.data.film.title);
        console.log("liste "+this.ltmp.id);
        console.log("nb film de la liste "+this.ltmp.films.length); 
        console.log("visibilité : "+this.ltmp.visibility);         
      }

      this.nameList="";

    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
