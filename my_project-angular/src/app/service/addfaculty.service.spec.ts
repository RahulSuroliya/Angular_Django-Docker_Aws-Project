import { TestBed } from '@angular/core/testing';

import { AddfacultyService } from './addfaculty.service';

describe('AddfacultyService', () => {
  let service: AddfacultyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddfacultyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
