import { TestBed } from '@angular/core/testing';

import { TestKeysService } from './test-keys.service';

describe('TestKeysService', () => {
  let service: TestKeysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestKeysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
