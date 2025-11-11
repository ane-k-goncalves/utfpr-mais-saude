import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-login',
  imports: [RouterLink],
  templateUrl: './form-login.html',
  styleUrl: './form-login.css',
})
export class FormLogin {
  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/home']);
  }
}
