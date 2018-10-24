import { Component, OnInit } from '@angular/core';
import {MovieResponse} from '../../tmdb-data/Movie';
import {ActivatedRoute} from '@angular/router';
import {TmdbService} from '../../services/tmdb/tmdb.service';
import {SearchPeopleQuery} from '../../tmdb-data/SearchPeople';
import {SearchPeopleResponse} from '../../tmdb-data/SearchPeople';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {
  querysearch: SearchPeopleQuery;
  resultSearch: SearchPeopleResponse;
  input: HTMLLabelElement;
  constructor(private _route: ActivatedRoute, private tmdb: TmdbService) {
      //this.Search();
  }

  /*Search(s: string) {
      //this.querysearch.query = this.input.textContent;
    this.querysearch.query = s;
      setTimeout(() =>
          this.tmdb.init('384da4d1d38ad08447d757fb4629fa6b') // Clef de TMDB
            .searchPerson(this.querysearch)
            .then((res: SearchPeopleResponse) => {
              console.log('recherche result : ', this.resultSearch);
              this.resultSearch = res;
            })
            .catch(err => console.error('Error getting movie:', err)),
        1000);
  }*/
  ngOnInit() {
    this.querysearch.query = 'Brad Pit';
    setTimeout(() =>
        this.tmdb.init('384da4d1d38ad08447d757fb4629fa6b') // Clef de TMDB
          .searchPerson(this.querysearch)
          .then((res: SearchPeopleResponse) => {
            console.log('recherche result : ', this.resultSearch);
            this.resultSearch = res;
          })
          .catch(err => console.error('Error getting movie:', err)),
      1000);
  }

}
