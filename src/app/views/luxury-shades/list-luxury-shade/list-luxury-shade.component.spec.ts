import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLuxuryShadeComponent } from './list-luxury-shade.component';

describe('ListLuxuryShadeComponent', () => {
  let component: ListLuxuryShadeComponent;
  let fixture: ComponentFixture<ListLuxuryShadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLuxuryShadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLuxuryShadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
