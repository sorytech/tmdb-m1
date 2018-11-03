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
  public  director: PersonResponse={};
  showSpinner: boolean=true;

  ngOnInit() {
    this.current_id = this._route.snapshot.params['id']; // On récupère l'id du film
      this.tmdb.getPerson(this.current_id).then((r:PersonResponse) =>{
        this.director=r;
        this.showSpinner=false;
      }).catch(err => console.log("error getting director",err));
  }

  getPath(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }



}
