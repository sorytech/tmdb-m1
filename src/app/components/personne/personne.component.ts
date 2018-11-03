import { Component, OnInit } from '@angular/core';
import {PersonResponse} from '../../tmdb-data/Person';
import {TmdbService} from '../../services/tmdb/tmdb.service';
import {MovieResponse} from '../../tmdb-data/Movie';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
    public person: PersonResponse;
    private id: string;

    constructor(private _route: ActivatedRoute, private tmdb: TmdbService) {
    }

    ngOnInit() {
        setTimeout(() =>
                this.tmdb.getPerson(Number(this.id))
                    .then((p: PersonResponse) => {
                        this.person = p;
                    })
                    .catch(err => console.error('Error getting person:', err)),
            1000);


    }
}
