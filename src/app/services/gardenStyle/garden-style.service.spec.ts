import { TestBed } from '@angular/core/testing';

import { GardenStyleService } from './garden-style.service';

describe('GardenStyleService', () => {
  let service: GardenStyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GardenStyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
