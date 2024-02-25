import { TestBed } from '@angular/core/testing';

import { BarcoServiceService } from './barco-service.service';

describe('BarcoServiceService', () => {
  let service: BarcoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarcoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
