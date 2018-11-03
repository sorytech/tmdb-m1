import {Component, OnInit} from '@angular/core';
import {Crew, MovieCredits, MovieResponse} from '../../tmdb-data/Movie';
import {PersonResponse} from '../../tmdb-data/Person';
import {ActivatedRoute} from '@angular/router';
import {TmdbService} from '../../services/tmdb/tmdb.service';


@Component({
  selector: 'app-realisateur',
  templateUrl: './realisateur.component.html',
  styleUrls: ['./realisateur.component.css']
})
export class RealisateurComponent implements OnInit {


  constructor(private _route: ActivatedRoute, private tmdb: TmdbService) { }
  public current_id: number;
  public  crew: Crew;
  public  director: PersonResponse;

  ngOnInit() {
    console.log('Film : ', this._route.snapshot.params['id']);
    this.current_id = this._route.snapshot.params['id']; // On récupère l'id du film

    setTimeout(() =>
        this.tmdb.init('384da4d1d38ad08447d757fb4629fa6b') // Clef de TMDB
          .getMovieDetails(Number(this.current_id))
          .then(([mr, mc]) => {
            this.crew = mc.crew.find((elem) => elem.job === 'Director')
            this.tmdb.getPerson(this.crew.id).then((bio) => {
              this.director = bio ;
            });
          })
          .catch(err => console.error('Error getting movie:', err)),
      1000);
  }

  getPath(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }



}
