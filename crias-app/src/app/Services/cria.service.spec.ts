import { TestBed } from '@angular/core/testing';

import { CriaService } from './cria.service';

describe('CriaService', () => {
  let service: CriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
