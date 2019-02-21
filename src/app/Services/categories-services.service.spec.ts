import { TestBed } from '@angular/core/testing';

import { CategoriesServicesService } from './categories-services.service';

describe('CategoriesServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriesServicesService = TestBed.get(CategoriesServicesService);
    expect(service).toBeTruthy();
  });
});
