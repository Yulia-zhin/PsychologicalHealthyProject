import { TestBed } from '@angular/core/testing';

import { TestAnswersService } from './test-answers.service';

describe('TestAnswersService', () => {
  let service: TestAnswersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestAnswersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
