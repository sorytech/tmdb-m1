import {Component, OnInit} from '@angular/core';
import { MovieResponse } from 'src/app/tmdb-data/Movie';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';
import { Subscription } from 'rxjs';
import { TraitementFilms } from 'src/app/services/movies/traitement-films';

@Component({
    selector: 'app-list-view',
    templateUrl: './list-view.component.html',
    styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

    films: MovieResponse[];
 
    subscription : Subscription;
    showSpinner: boolean = true;
    
    constructor(private tmdbs: TmdbService,private filmsts:TraitementFilms) {
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
        this.tmdbs.getPopularMovies()
            .subscribe((movie: any[]) => {
                this.films = movie['results'];
                this.showSpinner=false;
                this.filmsts.setMovies(this.films);

            },
            (error) => {
                console.log('Impossible de récuperer les films ', error);
            }
        );
    }
    
}
