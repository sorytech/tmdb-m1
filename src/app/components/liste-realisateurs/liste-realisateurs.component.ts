import { Component, OnInit } from '@angular/core';
import { TraitementFilms } from 'src/app/services/movies/traitement-films';
import { MovieResponse, Crew, MovieCredits } from 'src/app/tmdb-data/Movie';
import { PersonResponse } from 'src/app/tmdb-data/Person';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';

@Component({
  selector: 'app-liste-realisateurs',
  templateUrl: './liste-realisateurs.component.html',
  styleUrls: ['./liste-realisateurs.component.css']
})
export class ListeRealisateursComponent implements OnInit {
  
  realisateurs : PersonResponse[]=[];
  movies : MovieResponse[]=[];
  idCurrentMovie:number=0;
  crew : Crew;
  showSpinner : boolean = true;

  constructor(private tmdbs:TmdbService) { }

  ngOnInit() {
    this.tmdbs.clickRealisators = true;
    this.loadRealisators();       
  }

  /* pour récuperer les réalisateurs, il faut d'abord avoir les films.
  On fait donc une requete pour obtenir les films populaires et pour chaque film,
  on récupère ses crédits. La méthode getCredits(id:number) du service donne comme
  résultat une promesse de MovieCredits : { id:number,cast:Cast[],crew:Crew[] }
  Pour avoir le réalisateur, on cherche dans crew l'élément dont le "job" est "Director".
  Le résultat obtenu est de type Crew : 
                                    { credit_id: number;
                                    department: string;
                                    gender: number;
                                    id: number;
                                    job: string;
                                    name: string;
                                    profile_path: string; } 
    Grâce à l'id du résultat, on peut utiliser la méthode getperson() pour avoir toutes
    les informations du réalisateur. */
  loadRealisators(){
    this.tmdbs.getPopularMovies()
    .subscribe((movie: any[]) => {
        this.movies = movie['results'];        
        for(let m in this.movies){
            this.idCurrentMovie=this.movies[m].id; 
            let title = this.movies[m].title;                   
            this.tmdbs.getCredits(this.idCurrentMovie).then((mc: MovieCredits) => {
                this.crew = mc.crew.find((elem) => elem.job === 'Director');              
                this.tmdbs.getPerson(this.crew.id)
                .then((r:PersonResponse) =>{                     
                    r.title_movie=title;
                    this.realisateurs.push(r);
                })
            .catch(err => console.log("error getting realisator",err));
            })
            .catch(err => console.error('error getting credits:', err)); 
        }
        this.showSpinner=false;
    },
    (error) => {
        console.log('Impossible de récuperer les films ', error);
    });
  }

}
