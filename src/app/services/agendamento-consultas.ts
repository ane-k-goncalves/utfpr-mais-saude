import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AgendamentoConsultas {
  private http = inject(HttpClient);
  private pb = 'http://127.0.0.1:8090/api/collections/consultas/records';

  getConsultas() {
    return this.http.get(this.pb);
  }

  createConsulta(dados: any) {
    return this.http.post(this.pb, dados);
  }

  updateConsulta(id: string, dados: any) {
    return this.http.patch(`${this.pb}/${id}`, dados);
  }

  deleteConsulta(id: string) {
    return this.http.delete(`${this.pb}/${id}`);
  }
}
