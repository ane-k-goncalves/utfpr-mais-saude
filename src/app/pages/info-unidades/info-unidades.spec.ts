import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUnidades } from './info-unidades';

describe('InfoUnidades', () => {
  let component: InfoUnidades;
  let fixture: ComponentFixture<InfoUnidades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoUnidades]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoUnidades);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
