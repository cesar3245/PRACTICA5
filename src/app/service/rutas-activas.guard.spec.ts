import { TestBed } from '@angular/core/testing';

import { RutasActivasGuard } from './rutas-activas.guard';

describe('RutasActivasGuard', () => {
  let guard: RutasActivasGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RutasActivasGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
