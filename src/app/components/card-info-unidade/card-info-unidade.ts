import { Component, Input } from '@angular/core';
import { CardInfoUpa } from '../../interfaces/card-info-upa.model';

@Component({
  selector: 'app-card-info-unidade',
  imports: [],
  templateUrl: './card-info-unidade.html',
  styleUrl: './card-info-unidade.css',
})
export class CardInfoUnidade {
  @Input() dataInfoUpa!: CardInfoUpa;
}
