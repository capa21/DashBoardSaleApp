import { TestBed } from '@angular/core/testing';

import { SalesProxyService } from './sales-proxy.service';

describe('SalesProxyService', () => {
  let service: SalesProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
