import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRealisateursComponent } from './liste-realisateurs.component';

describe('ListeRealisateursComponent', () => {
  let component: ListeRealisateursComponent;
  let fixture: ComponentFixture<ListeRealisateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeRealisateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeRealisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
