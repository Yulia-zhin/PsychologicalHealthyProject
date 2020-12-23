import { TestBed } from '@angular/core/testing';

import { UserTestResultService } from './user-test-result.service';

describe('UserTestResultService', () => {
  let service: UserTestResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserTestResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
