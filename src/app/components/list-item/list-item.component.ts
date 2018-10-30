import { Component, Input, OnInit } from '@angular/core';
import { MovieResponse, MovieGenre } from 'src/app/tmdb-data/Movie';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() film: MovieResponse;

  public current : MovieResponse={};
  
  public genresResults : MovieGenre[];

  constructor(private tmdb: TmdbService) { }

  ngOnInit() {
    this.tmdb.init('384da4d1d38ad08447d757fb4629fa6b') // Clef de TMDB
      .getMovie(Number(this.film.id))
      .then((m: MovieResponse) => {
        this.current = m;       
      }).catch(err => console.error('Error getting movie:', err));
  }
}
