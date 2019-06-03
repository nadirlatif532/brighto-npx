import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorTrendsComponent } from './color-trends.component';

describe('ColorTrendsComponent', () => {
  let component: ColorTrendsComponent;
  let fixture: ComponentFixture<ColorTrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorTrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
