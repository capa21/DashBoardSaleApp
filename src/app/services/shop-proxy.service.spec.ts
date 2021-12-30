import { TestBed } from '@angular/core/testing';

import { ShopProxyService } from './shop-proxy.service';

describe('ShopProxyService', () => {
  let service: ShopProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
