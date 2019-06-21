import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFinishingComponent } from './edit-finishing.component';

describe('EditFinishingComponent', () => {
  let component: EditFinishingComponent;
  let fixture: ComponentFixture<EditFinishingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFinishingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFinishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
