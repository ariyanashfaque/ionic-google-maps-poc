import { TestBed } from '@angular/core/testing';

import { NativeMapService } from './native-map.service';

describe('NativeMapService', () => {
  let service: NativeMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NativeMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
