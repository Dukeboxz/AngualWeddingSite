import { TestBed } from '@angular/core/testing';

import { WeddingInfoService } from './wedding-info.service';

describe('WeddingInfoService', () => {
  let service: WeddingInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeddingInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
