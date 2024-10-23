import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfacultyListComponent } from './addfaculty-list.component';

describe('AddfacultyListComponent', () => {
  let component: AddfacultyListComponent;
  let fixture: ComponentFixture<AddfacultyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfacultyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddfacultyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
