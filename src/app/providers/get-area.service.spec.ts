import { TestBed } from '@angular/core/testing';

import { GetAreaService } from './get-area.service';

describe('GetAreaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAreaService = TestBed.get(GetAreaService);
    expect(service).toBeTruthy();
  });
});
