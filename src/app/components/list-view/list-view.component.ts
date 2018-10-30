import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { MovieResponse, MovieGenre } from 'src/app/tmdb-data/Movie';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';
import { Subscription } from 'rxjs';
import { FilmService } from 'src/app/services/movies/film.service';

@Component({
    selector: 'app-list-view',
    templateUrl: './list-view.component.html',
    styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

    films: MovieResponse[];
 
    subscription : Subscription;
    
    constructor(private tmdbs: TmdbService, private route: ActivatedRoute, private router: Router,private filmsts:FilmService) {
    }
    ngOnInit() {
        this.loadMovies();
        this.subscription = this.filmsts.sub.subscribe( g => {          
            if(g.length !== 0){                
                this.films = this.filmsts.filterMovies(this.filmsts.getGenresChecked()); 
                console.log("les films filtrés",this.films);                            
            }else{
                this.loadMovies();
            }                 
        });
    }

    loadMovies(){
        this.tmdbs.init('384da4d1d38ad08447d757fb4629fa6b')
        .getPopular()
        .then((movie: any[]) => {
            this.films = movie['results'];  
            this.filmsts.setMovies(this.films); 
            console.log("tous les films",this.filmsts.getMovies());        
            },
            (error) => console.log('Erreur lors du téléchargement : ', error)
        );
    }

    
}
