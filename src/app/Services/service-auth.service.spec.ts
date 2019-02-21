import { TestBed } from '@angular/core/testing';

import { ServiceAuthService } from './service-auth.service';

describe('ServiceAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceAuthService = TestBed.get(ServiceAuthService);
    expect(service).toBeTruthy();
  });
});
