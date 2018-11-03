
import {Film} from '../../modeles/myModeles';
import {MovieResponse, MovieCredits, Crew, Cast, MovieVideos, Result} from '../../tmdb-data/Movie';
import {TmdbService} from '../../services/tmdb/tmdb.service';
import {PersonResponse} from '../../tmdb-data/Person';
import {Constant} from '../../constante/Constant';
import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';


@Component({
    selector: 'app-film',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.css']
})
export class FIlmComponent implements OnInit {

    public currentFilmResponse: MovieResponse; // Film en cours
    public currentFilmCredits: MovieCredits; // Film en cours
    public currentFilmVideos : MovieVideos;
    public crew: Crew;
    public casts: Cast[] = [];
    public director: PersonResponse;
    public key: string;
    public trailer: Result;
    public googleKey: string = 'AIzaSyBl1RYmD_cD4f4NLkyR1TngVhAaDhDa6zM';

    public googleIdClt: string = '691206734014-13kutq0basotvvf3vepths7ap38m441b.apps.googleusercontent.com';

    public googleKey2: string = 'MjMBKT229kAdFaoIsSlCBSd1';

    public currentFilm: MovieResponse; // Film en cours

    private id: string;

    // L'Id du film qui serai passé en paramètre dans le router
  
    constructor(private _route: ActivatedRoute, private _tmdb: TmdbService, private _sanitizer: DomSanitizer) {

    }

    ngOnInit() {
        console.log('Film : ', this._route.snapshot.params['id']);
        this.id = this._route.snapshot.params['id']; // On récupère l'id du film

        setTimeout(() =>
                this._tmdb.getMovieDetails(Number(this.id))
                  .then(([mr, mc, mv]) => {
                    console.log('getFilm Response : ', mr);
                    console.log('getFilm Credits : ', mc);
                    console.log('getFilm Videos : ', mv);
                    this.currentFilmResponse = mr;
                    this.currentFilmCredits = mc;
                    this.currentFilmVideos = mv;
                    this.crew = mc.crew.find((elem) => elem.job === 'Director');
                    mv.results.forEach((result) => {
                      if(result.type === 'Trailer'){
                        this.trailer=result;
                        this.key=result.key;
                      }
                    });
                    console.log('Trailer :', this.trailer);
                    console.log('Keys : "', this.key);
                    console.log('getFilm : ', this.currentFilmResponse);
                    this._tmdb.getPerson(this.crew.id).then((bio) => {
                      this.director = bio ;
                    });
                    mc.cast.forEach((cast) => {
                      console.log('cast ', cast)
                      this.casts.push(cast);
                    });
                    this.casts.splice(3);
                  })
                    .catch(err => console.error('Error getting movie:', err)),
            1000);
    }
    // Retourne l'URL complète du poster du film en cours

    getPath(path: string): string {
        return `https://image.tmdb.org/t/p/w500${path}`;
    }

    getPathVideo(path) {
      return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + path );   
    }

}
