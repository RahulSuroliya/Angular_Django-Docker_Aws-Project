import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcartListComponent } from './shoppingcart-list.component';

describe('ShoppingcartListComponent', () => {
  let component: ShoppingcartListComponent;
  let fixture: ComponentFixture<ShoppingcartListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingcartListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingcartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
