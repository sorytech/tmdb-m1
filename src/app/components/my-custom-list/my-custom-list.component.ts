import {Component, Input, OnInit} from '@angular/core';
import {List} from '../../tmdb-data/List';

@Component({
  selector: 'app-my-custom-list',
  templateUrl: './my-custom-list.component.html',
  styleUrls: ['./my-custom-list.component.css']
})
export class MyCustomListComponent implements OnInit {

  @Input() list: List;

  constructor() { }

  ngOnInit() {
  }

  
}
