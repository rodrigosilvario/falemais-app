import { TestBed } from '@angular/core/testing';

import { LigacaoService } from './ligacao.service';

describe('LigacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LigacaoService = TestBed.get(LigacaoService);
    expect(service).toBeTruthy();
  });
});
