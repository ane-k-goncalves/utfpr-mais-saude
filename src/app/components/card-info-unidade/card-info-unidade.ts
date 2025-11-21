import { Component, Input } from '@angular/core';
import { CardInfoUpa } from '../../interfaces/card-info-upa.model';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-card-info-unidade',
  imports: [UpperCasePipe],
  templateUrl: './card-info-unidade.html',
  styleUrl: './card-info-unidade.css',
})
export class CardInfoUnidade {
  @Input() dataInfoUpa!: CardInfoUpa;
}
