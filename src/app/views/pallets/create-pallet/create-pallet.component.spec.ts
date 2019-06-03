import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePalletComponent } from './create-pallet.component';

describe('CreatePalletComponent', () => {
  let component: CreatePalletComponent;
  let fixture: ComponentFixture<CreatePalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
