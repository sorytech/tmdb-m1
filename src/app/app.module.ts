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
import {SortListPipe} from './pipes/sort-list.pipe';
import {MainPageComponent} from './components/main-page/main-page.component';
import {ListItemComponent} from './components/list-item/list-item.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ResearchComponent } from './components/research/research.component';
import {FilmService} from './services/movies/film.service';
import {FIlmComponent} from './components/film/film.component';
import {ListViewComponent} from './components/list-view/list-view.component';
import {MatToolbarModule} from '@angular/material';
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

const appRoutes: Routes = [
    { path: 'film/:id', component: FIlmComponent },
    { path: 'mylist', component: ListViewComponent },
    { path: '', component: ListViewComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        SortListPipe,
        MainPageComponent,
        ListItemComponent,
        ResearchComponent,
        ListViewComponent,
        FIlmComponent
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
        FormsModule
    ],
    providers: [TmdbService, FilmService],
    exports: [ResearchComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
