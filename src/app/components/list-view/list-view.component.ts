import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { MovieResponse, MovieGenre } from 'src/app/tmdb-data/Movie';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';
import { MainPageComponent } from '../main-page/main-page.component';
import { UserService } from 'src/app/services/users/user.service';


@Component({
    selector: 'app-list-view',
    templateUrl: './list-view.component.html',
    styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

    @Input() films: MovieResponse[];
    
    _userSercive: UserService;
    mpc : MainPageComponent;
    touslesgenres : MovieGenre[] = [
        {id: 28, name: "Action"},
        {id: 18, name: "Drama"},
        {id: 35, name: "Comedy"},
        {id: 878, name: "Science Fiction"}
    ];
    constructor(private tmdbs: TmdbService, private route: ActivatedRoute, private router: Router) {
    }
    ngOnInit() {
        this.tmdbs.init('384da4d1d38ad08447d757fb4629fa6b')
        .getPopular()
        .then((movie: any[]) => {
            this.films = movie['results'];              
            },
            (error) => console.log('Erreur lors du téléchargement : ', error)
        );           
    }
    update(){
        this.tmdbs.init('384da4d1d38ad08447d757fb4629fa6b')
        .getPopular()
        .then((movie: any[]) => {
            this.films = movie['results'];
            console.log("tous les genres qui existent",this.touslesgenres); 
            console.log("pour voir que contient le tableau genres",this.tmdbs.getGenresChecked());
            console.log("pour voir que contient genres dans tmdbs",this.tmdbs.getGenresCheckedNames());
            console.log("tous les films",this.films);
            this.films=this.tmdbs.filterMovies(this.films,this.tmdbs.getGenresChecked());
            console.log("les films filtrés ", this.films);
            this.tmdbs.filteredMovies = this.films;
                       
            },
            (error) => console.log('Erreur lors du téléchargement : ', error)
        ); 
        

    }

    
}
