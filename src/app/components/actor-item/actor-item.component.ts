import {Component, Input, OnInit} from '@angular/core';
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
  showSpinner = true;
  constructor(private _tmdb: TmdbService) { }

  ngOnInit() {
      setTimeout(() =>
              this._tmdb.getPerson(this.actor.id)
                  .then((acteur) => {
                      this.currentActor = acteur ;
                      this.showSpinner = false;
                  })
                  .catch(err => console.error('Error getting actor:', err)),
          1000);
  }

  get actorLoaded() {
    return this.currentActor;
  }
}
