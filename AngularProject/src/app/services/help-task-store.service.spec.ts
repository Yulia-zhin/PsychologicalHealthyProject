import { TestBed } from '@angular/core/testing';

import { HelpTaskStoreService } from './help-task-store.service';

describe('HelpTaskStoreService', () => {
  let service: HelpTaskStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpTaskStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
