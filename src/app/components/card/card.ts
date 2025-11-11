import { Component, Input } from '@angular/core';
import { CardData } from '../../models/card.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() infocards!: CardData;
}
