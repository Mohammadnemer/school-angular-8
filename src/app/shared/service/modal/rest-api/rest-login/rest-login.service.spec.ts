import { TestBed } from '@angular/core/testing';

import { RestLoginService } from './rest-login.service';

describe('RestLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestLoginService = TestBed.get(RestLoginService);
    expect(service).toBeTruthy();
  });
});
