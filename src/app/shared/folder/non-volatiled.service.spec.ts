import { TestBed } from '@angular/core/testing';

import { NonVolatiledService } from './non-volatiled.service';

describe('NonVolatiledService', () => {
  let service: NonVolatiledService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonVolatiledService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
