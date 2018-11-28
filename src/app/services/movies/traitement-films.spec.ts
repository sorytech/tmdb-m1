import { TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/services/movies/traitement-films.spec.ts
import { TraitementFilmsService } from './traitement-films';
=======
import { TraitementFilms } from './traitement-films';
>>>>>>> 1bb82f7e3c3b6b520b2a28e93cf268872877ad96:src/app/services/movies/traitement-films.spec.ts

describe('FilmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
<<<<<<< HEAD:src/app/services/movies/traitement-films.spec.ts
    const service: TraitementFilmsService = TestBed.get(TraitementFilmsService);
=======
    const service: TraitementFilms = TestBed.get(TraitementFilms);
>>>>>>> 1bb82f7e3c3b6b520b2a28e93cf268872877ad96:src/app/services/movies/traitement-films.spec.ts
    expect(service).toBeTruthy();
  });
});
