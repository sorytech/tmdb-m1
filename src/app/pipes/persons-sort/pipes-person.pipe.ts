import { Pipe, PipeTransform } from '@angular/core';
import {PersonResponse} from '../../tmdb-data/Person';

@Pipe({
  name: 'pipesPerson'
})
export class PipesPersonPipe implements PipeTransform {
  transform(persons: PersonResponse[], searchText?: string): any {

    if (!persons) {
      return [];
    }

    if (!searchText) {
      return persons;
    }

    searchText = searchText.toString().toLowerCase();

    return persons.filter(it => {
      return it.name.toString().toLowerCase().includes(searchText);
    });
  }

}
