import { TestBed } from '@angular/core/testing';

import { FirstDataService } from './first-data.service';

describe('FirstDataService', () => {
  let service: FirstDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
