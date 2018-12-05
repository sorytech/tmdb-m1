import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DialogData } from '../main-page/main-page.component';
import { ActivatedRoute } from '@angular/router';
import { TraitementFilmsService } from 'src/app/services/movies/traitement-films';
import { List } from 'src/app/tmdb-data/List';
import { MovieResponse } from 'src/app/tmdb-data/Movie';
@Component({
  selector: 'app-remove-movie',
  templateUrl: './remove-movie.component.html',
  styleUrls: ['./remove-movie.component.css']
})
export class RemoveMovieComponent implements OnInit {

  private id: string;
  public list: List;
  constructor(public dialogRef: MatDialogRef<RemoveMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,public dialog: MatDialog,
    private _route: ActivatedRoute,private _filmTraitment: TraitementFilmsService) {}


  ngOnInit() {}

  removeMovie(film: MovieResponse){
    this.list = this._filmTraitment.getListTmp();
    this.list.films.splice(this.list.films.indexOf(film),1);
    this.onNoClick();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
