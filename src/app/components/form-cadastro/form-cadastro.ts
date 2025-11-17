import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-cadastro',
  imports: [RouterLink, FormsModule],
  templateUrl: './form-cadastro.html',
  styleUrl: './form-cadastro.css',
})
export class FormCadastro {
  email: string = '';
  password: string = '';
  name: string = '';

  constructor(private auth: Auth, private router: Router) {}

  async onSubmit() {
    try {
      await this.auth.register(this.email, this.password, this.name);
      alert('usuario cadastrado com sucesso!!!');
      this.router.navigate(['']);
    } catch (err) {
      console.error('falha ao cadastrar usuario!!!', err);
      alert('erro ao registrar usuário!! verifique os dados!!!');
    }
  }
}
