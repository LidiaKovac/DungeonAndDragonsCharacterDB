import { TestBed } from '@angular/core/testing';

import { IsCompleteGuard } from './is-complete.guard';

describe('IsCompleteGuard', () => {
  let guard: IsCompleteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsCompleteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
