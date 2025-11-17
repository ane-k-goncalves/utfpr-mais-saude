import { Component } from '@angular/core';
import { CardInfoUnidade } from '../../components/card-info-unidade/card-info-unidade';
import { CardInfoUpa } from '../../interfaces/card-info-upa.model';
import { Upas } from '../../services/upas';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-unidades',
  imports: [CardInfoUnidade, CommonModule],
  templateUrl: './info-unidades.html',
  styleUrl: './info-unidades.css',
})
export class InfoUnidades {
  upas: CardInfoUpa[] = [];

  constructor(private upasService: Upas) {}

  async ngOnInit() {
    this.upas = await this.upasService.getUpas();
  }
}
