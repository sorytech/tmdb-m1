import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { MovieResponse } from 'src/app/tmdb-data/Movie';
import { TraitementFilmsService } from 'src/app/services/movies/traitement-films';

@Component({
  selector: 'app-my-custom-list',
  templateUrl: './my-custom-list.component.html',
  styleUrls: ['./my-custom-list.component.css']
})
export class MyCustomListComponent implements OnInit {

  private id: string;
  public myMovies: MovieResponse[]=[];
  

  constructor(private _route: ActivatedRoute,private _filmTraitment: TraitementFilmsService) { }

  ngOnInit() {
    this.id = this._route.snapshot.params['id']; // On récupère l'id de la liste
    this.myMovies=this._filmTraitment.getMoviesFromList(this.id);
  }

  
}
