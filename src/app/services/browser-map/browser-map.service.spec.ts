import { TestBed } from '@angular/core/testing';

import { BrowserMapService } from './browser-map.service';

describe('BrowserMapService', () => {
  let service: BrowserMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrowserMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
