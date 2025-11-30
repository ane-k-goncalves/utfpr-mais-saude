import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-historico-comorbidades',
  imports: [],
  templateUrl: './historico-comorbidades.html',
  styleUrl: './historico-comorbidades.css',
})
export class HistoricoComorbidades {
  idRecebido!: string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idRecebido = this.route.snapshot.paramMap.get('id');
    console.log('ID recebido na página de vacinas:', this.idRecebido);
  }
}
