import { TestBed } from '@angular/core/testing';

import { PortfoliomanagementService } from './portfoliomanagement.service';

describe('PortfoliomanagementService', () => {
  let service: PortfoliomanagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfoliomanagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
