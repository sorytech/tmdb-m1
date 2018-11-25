import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddFilmComponent } from './dialog-add-film.component';

describe('DialogAddFilmComponent', () => {
  let component: DialogAddFilmComponent;
  let fixture: ComponentFixture<DialogAddFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
