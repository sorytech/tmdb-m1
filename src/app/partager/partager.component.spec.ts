import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartagerComponent } from './partager.component';

describe('PartagerComponent', () => {
  let component: PartagerComponent;
  let fixture: ComponentFixture<PartagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
