import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './form-login.html',
  styleUrl: './form-login.css',
})
export class FormLogin {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private auth: Auth) {}

  async onSubmit() {
    try {
      await this.auth.login(this.email, this.password);
      console.log('usuario logado');
      this.router.navigate(['/home']);
    } catch (err) {
      console.error('falha no login', err);
      alert('email ou senha invalidos');
    }
  }
}
