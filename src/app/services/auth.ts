import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import PocketBase from 'pocketbase';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private pb: PocketBase;

  constructor(private router: Router) {
    this.pb = new PocketBase('http://127.0.0.1:8090');
  }

  async login(email: string, password: string) {
    try {
      const userService = await this.pb.collection('users').authWithPassword(email, password);
      return userService;
    } catch (err) {
      console.log('ero ao logar!!!', err);
      throw err;
    }
  }
}
