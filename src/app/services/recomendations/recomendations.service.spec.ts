import { TestBed } from '@angular/core/testing';

import { RecomendationsService } from './recomendations.service';

describe('RecomendationsService', () => {
  let service: RecomendationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecomendationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
