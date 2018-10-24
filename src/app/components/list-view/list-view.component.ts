import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { MovieResponse } from 'src/app/tmdb-data/Movie';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';

@Component({
    selector: 'app-list-view',
    templateUrl: './list-view.component.html',
    styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

    @Input() films: MovieResponse[] = [];

    constructor(private _FService: TmdbService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this._FService.init('384da4d1d38ad08447d757fb4629fa6b')
            .getPopular()
            .then((movie: any[]) => {
                    this.films = movie['results'];
                },
                (error) => console.log('Erreur lors du téléchargement : ', error)
            );
    }

}
