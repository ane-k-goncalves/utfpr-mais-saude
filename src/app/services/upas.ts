import { Injectable } from '@angular/core';
import { CardInfoUpa } from '../interfaces/card-info-upa.model';
import { dataInfoUpa } from '../../mocks/mock-info-upas';

@Injectable({
  providedIn: 'root',
})
export class Upas {
  constructor() {}

  getUpas(): CardInfoUpa[] {
    return dataInfoUpa;
  }
}
