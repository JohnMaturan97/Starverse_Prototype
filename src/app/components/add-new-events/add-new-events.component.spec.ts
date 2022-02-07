import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewEventsComponent } from './add-new-events.component';

describe('AddNewEventsComponent', () => {
  let component: AddNewEventsComponent;
  let fixture: ComponentFixture<AddNewEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
