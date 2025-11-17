import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';
import { CardInfoUpa } from '../interfaces/card-info-upa.model';

@Injectable({
  providedIn: 'root',
})
export class Upas {
  private pb = new PocketBase('http://127.0.0.1:8090');

  constructor() {}

  async getUpas(): Promise<CardInfoUpa[]> {
    return await this.pb.collection('information_upas').getFullList();
  }

  async addUpa(upa: CardInfoUpa) {
    return await this.pb.collection('information_upas').create(upa);
  }

  async updateUpa(id: string, upa: Partial<CardInfoUpa>) {
    return await this.pb.collection('information_upas').update(id, upa);
  }

  async deleteUpa(id: string) {
    return await this.pb.collection('information_upas').delete(id);
  }
}
