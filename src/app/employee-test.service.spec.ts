import { TestBed } from '@angular/core/testing';

import { EmployeeTestService } from './employee-test.service';

describe('EmployeeTestService', () => {
  let service: EmployeeTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
