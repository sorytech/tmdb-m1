import { Component, OnInit, Inject } from '@angular/core';
import { TraitementFilmsService } from 'src/app/services/movies/traitement-films';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatSnackBar } from '@angular/material';
import { DialogData } from '../main-page/main-page.component';
import { ActivatedRoute } from '@angular/router';
import { List } from 'src/app/tmdb-data/List';
import { MovieResponse } from 'src/app/tmdb-data/Movie';

@Component({
  selector: 'app-move-movie',
  templateUrl: './move-movie.component.html',
  styleUrls: ['./move-movie.component.css']
})
export class MoveMovieComponent implements OnInit {
  public Currentlist: List;
  nameList: string;
  visibility: string="";
  ltmp : List;
  ifMyListEmpty:boolean;
  addClicked = false;

  constructor(public dialogRef: MatDialogRef<MoveMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,public dialog: MatDialog,
    private _route: ActivatedRoute,private filmTraitment: TraitementFilmsService,public snackBar: MatSnackBar) { }

  ngOnInit() {
        this.ifMyListEmpty=(this.filmTraitment.lists.length===0);
        this.Currentlist = this.filmTraitment.getListTmp();
  }


  moveMmoveMovieExistList(currentFilm: MovieResponse, listDestination: List, ){
    this.filmTraitment.moveMovieExistList(currentFilm,this.Currentlist,listDestination, this.dialogRef);
  }

  moveMovieNewList(film: MovieResponse,myListName: string){
    this.filmTraitment.moveMovieNewList(film,myListName,this.Currentlist,this.dialogRef);
  }
  

  changeAddClicked(): void {

    this.addClicked = !this.addClicked;
  } 

  onNoClick(): void {
    this.dialogRef.close();
  }
}
