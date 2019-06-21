import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFinishingComponent } from './create-finishing.component';

describe('CreateFinishingComponent', () => {
  let component: CreateFinishingComponent;
  let fixture: ComponentFixture<CreateFinishingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFinishingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFinishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
