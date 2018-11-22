import { TestBed } from '@angular/core/testing';

import { TraitementFilmsService } from './traitement-films';

describe('FilmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TraitementFilmsService = TestBed.get(TraitementFilmsService);
    expect(service).toBeTruthy();
  });
});
