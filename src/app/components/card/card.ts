import { Component, Input } from '@angular/core';
import { CardData } from '../../interfaces/card.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() infocards!: CardData;

  constructor(private router: Router) {}

  navegar(): void {
    this.router.navigate([this.infocards.link]);
  }
}
