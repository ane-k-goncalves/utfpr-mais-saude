import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgendamentoConsultas } from '../../services/agendamento-consultas';
import { Auth } from '../../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scheduling',
  imports: [FormsModule, CommonModule],
  templateUrl: './scheduling.html',
  styleUrl: './scheduling.css',
})
export class Scheduling {
  form = {
    especialidade: '',
    profissional: '',
    data: '',
    horario: '',
    observacoes: '',
  };

  consultasAgendadas: any[] = [];

  constructor(private consultas: AgendamentoConsultas, private auth: Auth) {}

  async ngOnInit() {
    this.loadConsultas();
  }

  async loadConsultas() {
    try {
      const user = this.auth.currentUser;

      if (!user) return;

      // Carrega só as consultas do usuário logado
      this.consultasAgendadas = await this.consultas.getConsultas();
    } catch (err) {
      console.error('Erro ao carregar consultas', err);
    }
  }

  async onSubmit() {
    try {
      if (!this.auth.currentUser) {
        alert('Usuário não autenticado');
        return;
      }

      const payload = {
        ...this.form,
        user: this.auth.currentUser.id,
      };

      await this.consultas.createConsulta(payload);

      alert('Consulta agendada com sucesso!');

      this.form = { especialidade: '', profissional: '', data: '', horario: '', observacoes: '' };
    } catch (e) {
      console.error(e);
      alert('Falha ao agendar.');
    }
  }

  editar(c: any) {
    console.log('Editar consulta:', c);
    // mais tarde podemos abrir modal, preencher o form, etc.
  }

  async deletar(id: string) {
    try {
      await this.consultas.deleteConsulta(id);
      this.loadConsultas();
    } catch (err) {
      console.error('Erro ao deletar consulta', err);
    }
  }
}
