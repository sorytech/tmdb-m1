import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveListComponent } from './remove-list.component';

describe('RemoveListComponent', () => {
  let component: RemoveListComponent;
  let fixture: ComponentFixture<RemoveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
