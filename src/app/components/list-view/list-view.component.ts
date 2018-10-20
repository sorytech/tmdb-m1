import {Component, Input, OnInit} from '@angular/core';
import {Film} from '../../modeles/myModeles';
import {ActivatedRoute, Router} from '@angular/router';
import {FilmService} from '../../services/movies/film.service';

@Component({
    selector: 'app-list-view',
    templateUrl: './list-view.component.html',
    styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

    @Input() films: Film[] = [];

    constructor(private _FService: FilmService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this._FService.getPopularMovies()
            .subscribe((movie: any[]) => {
                    this.films = movie['results'];
                },
                (error) => console.log('Erreur lors du téléchargement : ', error)
            );
    }

}
