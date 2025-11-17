import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';

@Injectable({
  providedIn: 'root',
})
export class AgendamentoConsultas {
  private pb = new PocketBase('127.0.0.1:8090');

  async getConsultas() {
    return await this.pb.collection('consultas').getFullList();
  }

  async createConsulta(dados: any) {
    return await this.pb.collection('consultas').create(dados);
  }

  async updateConsulta(id: string, dados: any) {
    return await this.pb.collection('consultas').update(id, dados);
  }

  async deleteConsulta(id: string) {
    return await this.pb.collection('consultas').delete(id);
  }
}
