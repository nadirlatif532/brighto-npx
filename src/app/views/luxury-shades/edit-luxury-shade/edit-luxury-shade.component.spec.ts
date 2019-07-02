import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLuxuryShadeComponent } from './edit-luxury-shade.component';

describe('EditLuxuryShadeComponent', () => {
  let component: EditLuxuryShadeComponent;
  let fixture: ComponentFixture<EditLuxuryShadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLuxuryShadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLuxuryShadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
