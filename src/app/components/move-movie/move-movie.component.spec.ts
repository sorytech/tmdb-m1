import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveMovieComponent } from './move-movie.component';

describe('MoveMovieComponent', () => {
  let component: MoveMovieComponent;
  let fixture: ComponentFixture<MoveMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
