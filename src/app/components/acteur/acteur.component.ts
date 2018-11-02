import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';
import { MovieResponse, MovieCredits, Crew, Cast } from 'src/app/tmdb-data/Movie';
import { PersonResponse } from 'src/app/tmdb-data/Person';

@Component({
  selector: 'app-acteur',
  templateUrl: './acteur.component.html',
  styleUrls: ['./acteur.component.css']
})
export class ActeurComponent implements OnInit {
  public current_id : number;
  public actor: PersonResponse;
  public  casts: Cast[] = [];
  private id: string;

  constructor(private routeur : ActivatedRoute, private tmdb : TmdbService) {

   }

  ngOnInit() {
        console.log('Film : ', this.routeur.snapshot.params['id']);
        this.current_id = this.routeur.snapshot.params['id']; // On récupère l'id de l'acteur

    setTimeout(() =>
        this.tmdb.init('384da4d1d38ad08447d757fb4629fa6b') // Clef de TMDB
            .getPerson(this.current_id)
            .then((acteur) => {
              this.actor = acteur ;
            })
          .catch(err => console.error('Error getting actor:', err)),
      1000);
  }

  getPath(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

  getGender(gender: Number): string {
    return (gender === 1? "Femimin" : "Masculin");
  }

}
