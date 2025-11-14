import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHistory } from './card-history';

describe('CardHistory', () => {
  let component: CardHistory;
  let fixture: ComponentFixture<CardHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
