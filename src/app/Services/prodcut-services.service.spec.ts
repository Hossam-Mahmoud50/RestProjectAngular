import { TestBed } from '@angular/core/testing';

import { ProdcutServicesService } from './prodcut-services.service';

describe('ProdcutServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdcutServicesService = TestBed.get(ProdcutServicesService);
    expect(service).toBeTruthy();
  });
});
