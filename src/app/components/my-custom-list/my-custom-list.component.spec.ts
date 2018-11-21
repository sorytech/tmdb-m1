import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCustomListComponent } from './my-custom-list.component';

describe('MyCustomListComponent', () => {
  let component: MyCustomListComponent;
  let fixture: ComponentFixture<MyCustomListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCustomListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCustomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
