import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliomanagementComponent } from './portfoliomanagement.component';

describe('PortfoliomanagementComponent', () => {
  let component: PortfoliomanagementComponent;
  let fixture: ComponentFixture<PortfoliomanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoliomanagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfoliomanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
