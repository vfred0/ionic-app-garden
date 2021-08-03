import { TestBed } from '@angular/core/testing';

import { LandCalculatorService } from './land-calculator.service';

describe('LandCalculatorService', () => {
  let service: LandCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
