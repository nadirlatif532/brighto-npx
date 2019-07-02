import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLuxuryShadeComponent } from './create-luxury-shade.component';

describe('CreateLuxuryShadeComponent', () => {
  let component: CreateLuxuryShadeComponent;
  let fixture: ComponentFixture<CreateLuxuryShadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLuxuryShadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLuxuryShadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
