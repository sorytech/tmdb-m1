import {Component, Input, OnInit} from '@angular/core';
import {MovieResponse} from '../../tmdb-data/Movie';
import {Constant} from '../../constante/Constant';
import {PersonResponse} from '../../tmdb-data/Person';
import {TmdbService} from '../../services/tmdb/tmdb.service';

@Component({
  selector: 'app-actor-item',
  templateUrl: './actor-item.component.html',
  styleUrls: ['./actor-item.component.css']
})
export class ActorItemComponent implements OnInit {
  @Input()
  public actor: PersonResponse;
  public currentActor: PersonResponse;
  public imageBaseUrl = Constant.imageBaseURL;

  constructor(private _tmdb: TmdbService) { }

  ngOnInit() {


      setTimeout(() =>
              this._tmdb.getPerson(this.actor.id)
                  .then((acteur) => {
                      this.currentActor = acteur ;
                  })
                  .catch(err => console.error('Error getting actor:', err)),
          1000);
  }

}
