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
      console.log('erro ao logar!!!', err);
      throw err;
    }
  }

  async register(email: string, password: string, name: string) {
    try {
      const newUser = await this.pb.collection('users').create({
        name,
        email,
        password,
        passwordConfirm: password,
      });
      return newUser;
    } catch (err) {
      console.error('erro ao registrar usuario', err);
      throw err;
    }
  }

  logout() {
    this.pb.authStore.clear();
    this.router.navigate(['']);
  }

  get currentUser() {
    return this.pb.authStore.model;
  }

  get isLoggedIn() {
    return !!this.pb.authStore.model;
  }
}
