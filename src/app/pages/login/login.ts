import { Component } from '@angular/core';
import { Logo } from '../../components/logo/logo';
import { FormLogin } from '../../components/form-login/form-login';

@Component({
  selector: 'app-login',
  imports: [Logo, FormLogin],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {}
