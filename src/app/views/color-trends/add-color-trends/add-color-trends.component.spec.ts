import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddColorTrendsComponent } from './add-color-trends.component';

describe('AddColorTrendsComponent', () => {
  let component: AddColorTrendsComponent;
  let fixture: ComponentFixture<AddColorTrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddColorTrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddColorTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
