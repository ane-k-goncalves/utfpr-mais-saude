import { Component } from '@angular/core';
import { FormCadastro } from '../../components/form-cadastro/form-cadastro';

@Component({
  selector: 'app-cadastro',
  imports: [FormCadastro],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {}
