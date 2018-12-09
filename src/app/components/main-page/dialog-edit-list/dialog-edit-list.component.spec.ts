import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditListComponent } from './dialog-edit-list.component';

describe('DialogEditListComponent', () => {
  let component: DialogEditListComponent;
  let fixture: ComponentFixture<DialogEditListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEditListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
