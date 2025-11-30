import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-historico-vacinas',
  imports: [],
  templateUrl: './historico-vacinas.html',
  styleUrl: './historico-vacinas.css',
})
export class HistoricoVacinas {
  idRecebido!: string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idRecebido = this.route.snapshot.paramMap.get('id');
    console.log('ID recebido na página de vacinas:', this.idRecebido);
  }
}
