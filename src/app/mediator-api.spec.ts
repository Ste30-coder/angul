import { TestBed } from '@angular/core/testing';

import { MediatorApi } from './mediator-api';

describe('MediatorApi', () => {
  let service: MediatorApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediatorApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
