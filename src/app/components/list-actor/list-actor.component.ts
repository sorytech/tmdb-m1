import {Component, Input, OnInit} from '@angular/core';
import {MovieResponse} from '../../tmdb-data/Movie';
import {Constant} from '../../constante/Constant';
import {PersonResponse} from '../../tmdb-data/Person';

@Component({
  selector: 'app-list-actor',
  templateUrl: './list-actor.component.html',
  styleUrls: ['./list-actor.component.css']
})
export class ListActorComponent implements OnInit {
  @Input()
  public person: PersonResponse;

  public imageBaseUrl = Constant.imageBaseURL;
  constructor() { }

  ngOnInit() {
  }

}
