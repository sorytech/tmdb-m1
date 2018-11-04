import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewPersonComponent } from './list-view-person.component';

describe('ListViewPersonComponent', () => {
  let component: ListViewPersonComponent;
  let fixture: ComponentFixture<ListViewPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListViewPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
