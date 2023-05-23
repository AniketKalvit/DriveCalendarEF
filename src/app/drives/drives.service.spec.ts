import { TestBed } from '@angular/core/testing';

import { DrivesService } from './drives.service';

describe('DrivesService', () => {
  let service: DrivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
