import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-historico-consultas',
  imports: [],
  templateUrl: './historico-consultas.html',
  styleUrl: './historico-consultas.css',
})
export class HistoricoConsultas {
  idRecebido!: string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idRecebido = this.route.snapshot.paramMap.get('id');
    console.log('ID recebido na página de vacinas:', this.idRecebido);
  }
}
