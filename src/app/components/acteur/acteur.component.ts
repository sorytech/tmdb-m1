import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TmdbService} from 'src/app/services/tmdb/tmdb.service';
import {Cast} from 'src/app/tmdb-data/Movie';
import {PersonResponse} from 'src/app/tmdb-data/Person';

@Component({
    selector: 'app-acteur',
    templateUrl: './acteur.component.html',
    styleUrls: ['./acteur.component.css']
})
export class ActeurComponent implements OnInit {
    public current_id: number;
    public actor: PersonResponse;
    public casts: Cast[] = [];
    private id: string;
    public showSpinner = true;
    public fromFilm: string;

    constructor(private _route: ActivatedRoute, private tmdb: TmdbService) {

    }

    ngOnInit() {
        this.current_id = this._route.snapshot.params['id']; // On récupère l'id de l'acteur
        this.fromFilm = this._route.snapshot.params['fromFilm'];

        setTimeout(() =>
                this.tmdb.getPerson(this.current_id)
                    .then((acteur) => {
                        this.actor = acteur;
                        this.showSpinner = false;
                    })
                    .catch(err => console.error('Error getting actor:', err)),
            1000);
    }

    getPath(path: string): string {
        return `https://image.tmdb.org/t/p/w500${path}`;
    }

    getGender(gender: Number): string {
        return (gender === 1 ? 'Femimin' : 'Masculin');
    }

}
