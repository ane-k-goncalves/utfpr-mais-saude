import { TestBed } from '@angular/core/testing';

import { AgendamentoConsultas } from './agendamento-consultas';

describe('AgendamentoConsultas', () => {
  let service: AgendamentoConsultas;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendamentoConsultas);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
