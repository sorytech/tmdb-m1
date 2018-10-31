import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisteurComponent } from './realisteur.component';

describe('RealisteurComponent', () => {
  let component: RealisteurComponent;
  let fixture: ComponentFixture<RealisteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealisteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealisteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
