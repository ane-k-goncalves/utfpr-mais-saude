import { TestBed } from '@angular/core/testing';

import { Upas } from './upas';

describe('Upas', () => {
  let service: Upas;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Upas);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
