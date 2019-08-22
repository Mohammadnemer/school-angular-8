import { TestBed } from '@angular/core/testing';

import { RestAdminService } from './rest-admin.service';

describe('RestAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestAdminService = TestBed.get(RestAdminService);
    expect(service).toBeTruthy();
  });
});
