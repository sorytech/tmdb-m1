import {Pipe, PipeTransform} from '@angular/core';
import {MovieResponse} from '../../tmdb-data/Movie';

@Pipe({
    name: 'sortList'
})
export class SortListPipe implements PipeTransform {

    transform(movies: MovieResponse[], searchText?: string): any {

        if (!movies) {
            return [];
        }

        if (!searchText) {
            return movies;
        }

        searchText = searchText.toString().toLowerCase();

        return movies.filter(it => {
            return it.title.toString().toLowerCase().includes(searchText);
        });
    }

}
