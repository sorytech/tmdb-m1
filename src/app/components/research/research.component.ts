import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TmdbService} from '../../services/tmdb/tmdb.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  constructor(private _tmdb: TmdbService) { }

  ngOnInit() {
  }

  onChange (event) {
    this._tmdb.subject.next(event);
  }

}
