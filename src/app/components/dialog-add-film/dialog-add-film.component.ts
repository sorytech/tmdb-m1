import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MovieResponse} from '../../tmdb-data/Movie';
import {List} from '../../tmdb-data/List';

@Component({
  selector: 'app-dialog-add-film',
  templateUrl: './dialog-add-film.component.html',
  styleUrls: ['./dialog-add-film.component.css']
})
export class DialogAddFilmComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogAddFilmComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  public save(film: MovieResponse, list: List) {

  }
}
