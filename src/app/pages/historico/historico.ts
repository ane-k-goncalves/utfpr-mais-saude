import { Component } from '@angular/core';
import { CardHistory } from '../../components/card-history/card-history';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-historico',
  imports: [CardHistory, RouterOutlet, CommonModule, FormsModule],
  templateUrl: './historico.html',
  styleUrl: './historico.css',
})
export class Historico {
  constructor(public router: Router) {}

  isBaseRoute(): boolean {
    return this.router.url === '/historico';
  }

  irPara(rota: string) {
    this.router.navigate([rota]);
  }
}
