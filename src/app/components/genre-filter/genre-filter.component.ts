import { Component, OnInit } from '@angular/core';
import { MovieGenre, MovieResponse } from 'src/app/tmdb-data/Movie';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';
import {ListViewComponent} from '../list-view/list-view.component';
import { FilmService } from 'src/app/services/movies/film.service';

@Component({
  selector: 'app-genre-filter',
  templateUrl: './genre-filter.component.html',
  styleUrls: ['./genre-filter.component.css']
})
export class GenreFilterComponent implements OnInit {

  genres : MovieGenre[] = [];
  
  constructor(private tmdb: TmdbService) { }

  ngOnInit() {
    /*this.tmdb.init('384da4d1d38ad08447d757fb4629fa6b') // Clef de TMDB
      .getPopular()
      .then((movie: any[]) => {
        this.myMovies = movie['results'];

      }).catch(error => console.error('Erreur lors du téléchargement : ', error));*/

      this.tmdb.init('384da4d1d38ad08447d757fb4629fa6b') // Clef de TMDB
      .getGenre().then((movie: MovieGenre[]) => {
      this.genres = movie;
      }).catch(error => console.log('Erreur lors du téléchargement : ', error)); 
  } 


 

}
