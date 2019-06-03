import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPalletComponent } from './list-pallet.component';

describe('ListPalletComponent', () => {
  let component: ListPalletComponent;
  let fixture: ComponentFixture<ListPalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
