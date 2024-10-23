import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliomanagementListComponent } from './portfoliomanagement-list.component';

describe('PortfoliomanagementListComponent', () => {
  let component: PortfoliomanagementListComponent;
  let fixture: ComponentFixture<PortfoliomanagementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoliomanagementListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfoliomanagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
