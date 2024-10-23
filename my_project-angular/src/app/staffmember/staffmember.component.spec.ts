import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffmemberComponent } from './staffmember.component';

describe('StaffmemberComponent', () => {
  let component: StaffmemberComponent;
  let fixture: ComponentFixture<StaffmemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffmemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
