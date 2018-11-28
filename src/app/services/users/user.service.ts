import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';
import {auth, User} from 'firebase';
import {filter} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {MovieResponse} from '../../tmdb-data/Movie';
import {TmdbService} from '../tmdb/tmdb.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

<<<<<<< HEAD
  private _user: User;
  private _dbData: Observable<any>;

  constructor(private tmdb: TmdbService, private _anAuth: AngularFireAuth, private _db: AngularFireDatabase) {
    this._anAuth.user.pipe(filter(u => !!u)).subscribe(u => {
      this._user = u;
      const listsPath = `lists/${u.uid}`;
      const lists = _db.list(listsPath);
      this._dbData = lists.valueChanges();
    });
  }

  login() {
    this._anAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this._anAuth.auth.signOut();
    this._user = undefined;
  }

  get user(): User {
    return this._user;
  }

  get lists(): Observable<any> {
    return this._dbData;
  }

  public getInstance() {
    return this;
  }
=======
    private _user: User;
    private _movie: MovieResponse;
    private _dbData: Observable<any>;

    constructor(private tmdb: TmdbService, private _anAuth: AngularFireAuth, private _db: AngularFireDatabase) {
        this._anAuth.user.pipe(filter(u => !!u)).subscribe(u => {
            this._user = u;
            const listsPath = `lists/${u.uid}`;
            const lists = _db.list(listsPath);
            lists.push('coucou');
            this._dbData = lists.valueChanges();
        });

        setTimeout( () =>
                tmdb.init('384da4d1d38ad08447d757fb4629fa6b') // Clef de TMDB
                    .getMovie(13)
                    .then( (m: MovieResponse) => console.log('Movie 13: ', this._movie = m) )
                    .catch( err => console.error('Error getting movie:', err) ),
            1000 );
    }

    login() {
        this._anAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }

    logout() {
        this._anAuth.auth.signOut();
        this._user = undefined;
        //this._user.displayName = '';
    }

    get user(): User {
        return this._user;
    }

    get lists(): Observable<any> {
        return this._dbData;
    }

    public getInstance() {
        return this;
    }
>>>>>>> 1bb82f7e3c3b6b520b2a28e93cf268872877ad96
}
