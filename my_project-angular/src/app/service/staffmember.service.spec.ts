import { TestBed } from '@angular/core/testing';

import { StaffmemberService } from './staffmember.service';

describe('StaffmemberService', () => {
  let service: StaffmemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffmemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
