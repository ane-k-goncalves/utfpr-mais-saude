import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Cadastro } from './pages/cadastro/cadastro';
import { Home } from './pages/home/home';
import { Location } from './pages/location/location';

export const routes: Routes = [
  {
    path: '',
    component: Login,
  },
  {
    path: 'cadastro',
    component: Cadastro,
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'location',
    component: Location,
  },
];
