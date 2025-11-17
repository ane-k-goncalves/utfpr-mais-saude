import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfoUnidade } from './card-info-unidade';

describe('CardInfoUnidade', () => {
  let component: CardInfoUnidade;
  let fixture: ComponentFixture<CardInfoUnidade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardInfoUnidade]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardInfoUnidade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
