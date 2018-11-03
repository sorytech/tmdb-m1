import {Component, Input, OnInit} from '@angular/core';
import {Film} from '../../modeles/myModeles';
<<<<<<< HEAD
=======
import {MovieResponse} from '../../tmdb-data/Movie';
import {Constant} from '../../constante/Constant';
>>>>>>> origin/master

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

<<<<<<< HEAD
  @Input()film: Film;
=======
  @Input()
  public film: MovieResponse;

  public imageBaseUrl = Constant.imageBaseURL;
>>>>>>> origin/master

  constructor() { }

  ngOnInit() {
  }

  onSelect () {
<<<<<<< HEAD
    console.log('séléctioné : ', this.film.id);
=======

>>>>>>> origin/master
  }

}
