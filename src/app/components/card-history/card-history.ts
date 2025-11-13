import { Component, Input } from '@angular/core';
import CardDataHistory from '../../interfaces/card-history.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-history',
  imports: [],
  templateUrl: './card-history.html',
  styleUrl: './card-history.css',
})
export class CardHistory {
  @Input() cardHistorico!: CardDataHistory;

  constructor(private router: Router) {}

  navegarHistorico(): void {
    this.router.navigate([this.cardHistorico.link]);
  }
}
