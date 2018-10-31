import {Component, Input, OnInit} from '@angular/core';
import {Film} from '../../modeles/myModeles';
import {MovieResponse} from '../../tmdb-data/Movie';
import {Constant} from '../../constante/Constant';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input()
  public film: MovieResponse;

  public imageBaseUrl = Constant.imageBaseURL;

  constructor() { }

  ngOnInit() {
  }

  onSelect () {

  }

}
