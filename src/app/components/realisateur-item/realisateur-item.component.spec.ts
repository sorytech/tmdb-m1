import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisateurItemComponent } from './realisateur-item.component';

describe('RealisateurItemComponent', () => {
  let component: RealisateurItemComponent;
  let fixture: ComponentFixture<RealisateurItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealisateurItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealisateurItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
