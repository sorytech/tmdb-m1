import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MovieCredits} from '../../tmdb-data/Movie';


@Component({
  selector: 'app-realisteur',
  templateUrl: './realisteur.component.html',
  styleUrls: ['./realisteur.component.css']
})
export class RealisteurComponent implements OnInit {


  constructor(private httpClient: HttpClient) { }

  public url_movie = `https://api.themoviedb.org/3/`;

  ngOnInit() {
  }

}
