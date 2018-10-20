import {Component, Input, OnInit} from '@angular/core';
import {Film} from '../../modeles/myModeles';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input()film: Film;

  constructor() { }

  ngOnInit() {
  }

  onSelect () {
    console.log('séléctioné : ', this.film.id);
  }

}
