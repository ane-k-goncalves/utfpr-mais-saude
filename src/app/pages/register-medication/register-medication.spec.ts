import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMedication } from './register-medication';

describe('RegisterMedication', () => {
  let component: RegisterMedication;
  let fixture: ComponentFixture<RegisterMedication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterMedication]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterMedication);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
