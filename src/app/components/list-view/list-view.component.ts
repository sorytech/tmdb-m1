import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { MovieResponse } from 'src/app/tmdb-data/Movie';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';
import { MainPageComponent } from 'src/app/components/main-page/main-page.component';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-list-view',
    templateUrl: './list-view.component.html',
    styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

    @Input() films: MovieResponse[] = [];

    myGenres: String[]=[];

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
            /*console.log("tableaux",MainPageComponent.tableau);
            MainPageComponent.tableau.subscribe(
            (genres:String[]) => {
                for(let i in genres){
                    console.log("observable",genres[i]);
                }
                //this.films = this.tmdbs.filterMovies(this.films,MainPageComponent.tableGenres);
                console.log("yes");
            }
            )*/
        
    }

}
