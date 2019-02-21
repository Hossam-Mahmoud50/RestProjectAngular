import { TestBed } from '@angular/core/testing';

import { AuthGraudsService } from './auth-grauds.service';

describe('AuthGraudsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGraudsService = TestBed.get(AuthGraudsService);
    expect(service).toBeTruthy();
  });
});
