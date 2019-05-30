import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditColorTrendsComponent } from './edit-color-trends.component';

describe('EditColorTrendsComponent', () => {
  let component: EditColorTrendsComponent;
  let fixture: ComponentFixture<EditColorTrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditColorTrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditColorTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
