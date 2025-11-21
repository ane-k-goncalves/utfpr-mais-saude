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
  consultasList: any[] = [];

  editando = false;
  editingId: string | null = null;

  form = {
    especialidade: '',
    profissional: '',
    data: '',
    horario: '',
    observacoes: '',
  };

  constructor(private consultas: AgendamentoConsultas, private auth: Auth) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.consultas.getConsultas().subscribe({
      next: (dados: any) => {
        this.consultasList = dados.items || dados;
      },
      error: (e) => console.error(e),
    });
  }

  onSubmit() {
    if (!this.auth.currentUser) {
      alert('Usuário não autenticado');
      return;
    }

    const payload = {
      ...this.form,
      user: this.auth.currentUser.id,
    };

    if (this.editando && this.editingId) {
      this.consultas.updateConsulta(this.editingId, payload).subscribe({
        next: () => {
          alert('Consulta atualizada com sucesso!');
          this.resetForm();
          this.load();
        },
        error: (e) => console.error(e),
      });
      return;
    }

    this.consultas.createConsulta(payload).subscribe({
      next: () => {
        alert('Consulta criada com sucesso!');
        this.resetForm();
        this.load();
      },
      error: (e) => console.error(e),
    });
  }

  delete(id: string) {
    if (!confirm('Deseja excluir?')) return;

    this.consultas.deleteConsulta(id).subscribe({
      next: () => this.load(),
      error: (e) => console.error(e),
    });
  }

  editar(c: any) {
    this.editando = true;
    this.editingId = c.id;

    this.form = {
      especialidade: c.especialidade,
      profissional: c.profissional,
      data: c.data,
      horario: c.horario,
      observacoes: c.observacoes,
    };
  }

  resetForm() {
    this.form = {
      especialidade: '',
      profissional: '',
      data: '',
      horario: '',
      observacoes: '',
    };

    this.editando = false;
    this.editingId = null;
  }
}
