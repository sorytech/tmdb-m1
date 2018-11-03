<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TmdbService} from '../../services/tmdb/tmdb.service';
>>>>>>> origin/master

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  @Output() valueResearch: EventEmitter<string> = new EventEmitter();

  constructor(private _tmdb: TmdbService) { }
>>>>>>> origin/master

  ngOnInit() {
  }

<<<<<<< HEAD
=======
  onChange (event) {
      this._tmdb.subject.next(event);
  }

>>>>>>> origin/master
}
