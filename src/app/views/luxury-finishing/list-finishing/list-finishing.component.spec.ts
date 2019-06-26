import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFinishingComponent } from './list-finishing.component';

describe('ListFinishingComponent', () => {
  let component: ListFinishingComponent;
  let fixture: ComponentFixture<ListFinishingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFinishingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFinishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
