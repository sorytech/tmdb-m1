import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FIlmComponent } from './film.component';

describe('FIlmComponent', () => {
  let component: FIlmComponent;
  let fixture: ComponentFixture<FIlmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FIlmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FIlmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
