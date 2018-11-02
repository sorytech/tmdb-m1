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

  constructor(private tmdbs:TmdbService) { }

  ngOnInit() {

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
                .catch(err => console.log("error getting director",err));
                })
                .catch(err => console.error('error getting credits:', err)); 
            }
        },
        (error) => {
            console.log('Erreur lors du téléchargement : ', error);
        });
      
        
  }

}
