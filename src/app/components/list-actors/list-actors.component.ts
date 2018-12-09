import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TmdbService} from '../../services/tmdb/tmdb.service';
import {PersonResponse} from '../../tmdb-data/Person';

@Component({
    selector: 'app-list-actors',
    templateUrl: './list-actors.component.html',
    styleUrls: ['./list-actors.component.css']
})
export class ListActorsComponent implements OnInit {

    @Input() actors: PersonResponse[] = [];

    private _valueToResearch = '';
    constructor(private _tmdb: TmdbService, private router: Router) {
    }

    ngOnInit() {
        this._tmdb.getPopularPerson()
            .subscribe((person: any[]) => {
                    this.actors = person['results'];
                },
                (error) => {
                    console.log('Erreur lors du téléchargement : ', error);
                }
            );
        /**
         * Récupère la valeur de la barre de recherche et met à jour la liste des acteurs
         */
        this._tmdb.subject.subscribe((data) => {
            this.valueToResearch = data;
            if (this.valueToResearch === '') {
                this._tmdb.getPopularPerson()
                    .subscribe((person: any[]) => {
                            this.actors = person['results'];
                        },
                        (error) => {
                            console.log('Erreur lors du téléchargement : ', error);
                        }
                    );
            } else {
                this._tmdb.getPersonByName(this.valueToResearch.toString())
              .subscribe((actors: any[]) => {
                this.actors = actors['results'];
              });
            }
        });  
    }

    get valueToResearch(): string {
        return this._valueToResearch;
    }

    @Input()
    set valueToResearch(value: string) {
        this._valueToResearch = value;
    }
}
