import { Component, OnInit, Input } from '@angular/core';
import { PersonResponse } from 'src/app/tmdb-data/Person';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';

@Component({
  selector: 'app-realisateur-item',
  templateUrl: './realisateur-item.component.html',
  styleUrls: ['./realisateur-item.component.css']
})
export class RealisateurItemComponent implements OnInit {

  @Input() realisateur: PersonResponse;

  constructor(private tmdb: TmdbService) { }

  ngOnInit() {
    /*this.tmdb.init('384da4d1d38ad08447d757fb4629fa6b') // Clef de TMDB
      .getMovie(Number(this.film.id))
      .then((m: MovieResponse) => {
        this.current = m;       
      }).catch(err => console.error('Error getting movie:', err));*/
  }

}
