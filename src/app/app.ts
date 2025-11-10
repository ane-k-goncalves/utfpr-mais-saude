import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { LoginComponent } from './pages/login/login.component';
import { Logo } from './components/logo/logo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, LoginComponent, Logo],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('utfpr-mais-saude');
}
