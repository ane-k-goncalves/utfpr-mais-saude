import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoVacinas } from './historico-vacinas';

describe('HistoricoVacinas', () => {
  let component: HistoricoVacinas;
  let fixture: ComponentFixture<HistoricoVacinas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricoVacinas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoVacinas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
