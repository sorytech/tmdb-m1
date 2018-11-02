import { TestBed } from '@angular/core/testing';

import { TraitementFilms } from './traitement-films';

describe('FilmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TraitementFilms = TestBed.get(TraitementFilms);
    expect(service).toBeTruthy();
  });
});
