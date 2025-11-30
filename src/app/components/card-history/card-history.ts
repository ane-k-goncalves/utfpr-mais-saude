import { Component, EventEmitter, Input, Output } from '@angular/core';
import CardDataHistory from '../../interfaces/card-history.model';

@Component({
  selector: 'app-card-history',
  imports: [],
  templateUrl: './card-history.html',
  styleUrl: './card-history.css',
})
export class CardHistory {
  @Input() cardHistorico!: CardDataHistory;

  @Output() navegar = new EventEmitter<string>();

  acionarNavegacao(): void {
    this.navegar.emit(this.cardHistorico.link);
  }
}
