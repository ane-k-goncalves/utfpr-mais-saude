import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Cadastro } from './pages/cadastro/cadastro';
import { Home } from './pages/home/home';
import { Location } from './pages/location/location';
import { Historico } from './pages/historico/historico';
import { HistoricoVacinas } from './pages/historico-vacinas/historico-vacinas';
import { HistoricoConsultas } from './pages/historico-consultas/historico-consultas';
import { HistoricoComorbidades } from './pages/historico-comorbidades/historico-comorbidades';
import { Scheduling } from './pages/scheduling/scheduling';
import { RegisterMedication } from './pages/register-medication/register-medication';
import { InfoUnidades } from './pages/info-unidades/info-unidades';

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
  {
    path: 'historico',
    component: Historico,
    children: [
      {
        path: 'vacinas/:id',
        component: HistoricoVacinas,
      },
      {
        path: 'consultas/:id',
        component: HistoricoConsultas,
      },
      {
        path: 'comorbidades/:id',
        component: HistoricoComorbidades,
      },
    ],
  },
  {
    path: 'agendamento',
    component: Scheduling,
  },
  {
    path: 'registrar-medicamento',
    component: RegisterMedication,
  },
  {
    path: 'info-unidades',
    component: InfoUnidades,
  },
];
