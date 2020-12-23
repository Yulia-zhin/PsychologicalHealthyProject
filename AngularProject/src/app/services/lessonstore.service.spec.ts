import { TestBed } from '@angular/core/testing';

import { LessonstoreService } from './lessonstore.service';

describe('LessonstoreService', () => {
  let service: LessonstoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonstoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
