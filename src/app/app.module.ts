import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TmdbService} from './services/tmdb/tmdb.service';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {SortListPipe} from './pipes/movies-sort/sort-list.pipe';
import {MainPageComponent} from './components/main-page/main-page.component';
import {ListItemComponent} from './components/list-item/list-item.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
<<<<<<< HEAD
import {ResearchComponent} from './components/research/research.component';
import {FIlmComponent} from './components/film/film.component';
import {ListViewComponent} from './components/list-view/list-view.component';
import {MatToolbarModule, MatRadioModule} from '@angular/material';
=======
import { ResearchComponent } from './components/research/research.component';
import {TraitementFilms} from './services/movies/traitement-films';
import {FIlmComponent} from './components/film/film.component';
import {ListViewComponent} from './components/list-view/list-view.component';
import { ListeRealisateursComponent } from './components/liste-realisateurs/liste-realisateurs.component';
import {MatToolbarModule} from '@angular/material';
>>>>>>> 1bb82f7e3c3b6b520b2a28e93cf268872877ad96
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
<<<<<<< HEAD
import {FormsModule} from '@angular/forms';
import {RealisateurComponent} from './components/realisateur/realisateur.component';
import {ActeurComponent} from './components/acteur/acteur.component';
import {ActorItemComponent} from './components/actor-item/actor-item.component';
import {ListActorsComponent} from './components/list-actors/list-actors.component';
import {PipesPersonPipe} from './pipes/persons-sort/pipes-person.pipe';
import {ListeRealisateursComponent} from './components/liste-realisateurs/liste-realisateurs.component';
import {TraitementFilmsService} from './services/movies/traitement-films';
import {RealisateurItemComponent} from './components/realisateur-item/realisateur-item.component';
import { MyCustomListComponent } from './components/my-custom-list/my-custom-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatBadgeModule} from '@angular/material/badge';
import { DialogAddFilmComponent } from './components/dialog-add-film/dialog-add-film.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddNewListComponent } from './components/main-page/add-new-list/add-new-list.component';

const appRoutes: Routes = [
    {path: 'film/:id', component: FIlmComponent},
    {path: 'films', component: ListViewComponent},
    {path: 'realisateur/:id', component: RealisateurComponent},
    {path: 'realisateurs', component: ListeRealisateursComponent},
    {path: 'realisateur/:id/:fromFilm', component: RealisateurComponent},
    {path: 'actor/:id/:fromFilm', component: ActeurComponent},
    {path: 'actors', component: ListActorsComponent},
    {path: '', component: ListViewComponent},
    {path: 'myCustomList/:id', component: MyCustomListComponent}
=======
import { RealisateurItemComponent } from './components/realisateur-item/realisateur-item.component';
import { RealisateurComponent } from './components/realisateur/realisateur.component';


const appRoutes: Routes = [
    { path: 'film/:id', component: FIlmComponent },
    { path: 'realisateur/:id', component: RealisateurComponent },
    { path: 'films', component: ListViewComponent },
    { path: 'realisateurs', component: ListeRealisateursComponent },
    { path: '', component: ListViewComponent }
>>>>>>> 1bb82f7e3c3b6b520b2a28e93cf268872877ad96
];

@NgModule({
    declarations: [
        AppComponent,
        SortListPipe,
        MainPageComponent,
        ListItemComponent,
        ResearchComponent,
        ListViewComponent,
        FIlmComponent,
<<<<<<< HEAD
        RealisateurComponent,
        RealisateurItemComponent,
        ListeRealisateursComponent,
        ActorItemComponent,
        ListActorsComponent,
        PipesPersonPipe,
        ActeurComponent,
        MyCustomListComponent,
        DialogAddFilmComponent,
        AddNewListComponent
=======
        ListeRealisateursComponent,
        RealisateurItemComponent,
        RealisateurComponent
>>>>>>> 1bb82f7e3c3b6b520b2a28e93cf268872877ad96
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        RouterModule.forRoot(appRoutes),
        BrowserAnimationsModule,
        MatToolbarModule,
        MatCardModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatCheckboxModule,
        MatSliderModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
<<<<<<< HEAD
        FormsModule,
        MatExpansionModule,
        MatBadgeModule,
        MatDialogModule,
        MatRadioModule 
    ],
    providers: [TmdbService, TraitementFilmsService],
=======
        FormsModule
    ],
    providers: [TmdbService, TraitementFilms],
>>>>>>> 1bb82f7e3c3b6b520b2a28e93cf268872877ad96
    exports: [ResearchComponent],
    entryComponents: [DialogAddFilmComponent,AddNewListComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
