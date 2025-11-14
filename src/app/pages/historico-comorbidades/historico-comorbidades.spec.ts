import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoComorbidades } from './historico-comorbidades';

describe('HistoricoComorbidades', () => {
  let component: HistoricoComorbidades;
  let fixture: ComponentFixture<HistoricoComorbidades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricoComorbidades]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoComorbidades);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
