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

  msgErro: string | null = null;
  msgOk: string | null = null;

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

  onSubmit(formRef: any) {
    if (formRef.invalid) {
      this.msgErro = 'Preencha todos os campos obrigatórios.';
      this.msgOk = null;
      return;
    }

    if (!this.auth.currentUser) {
      this.msgErro = 'Usuário não autenticado.';
      this.msgOk = null;
      return;
    }

    const payload = {
      ...this.form,
      user: this.auth.currentUser.id,
    };

    if (this.editando && this.editingId) {
      this.consultas.updateConsulta(this.editingId, payload).subscribe({
        next: () => {
          this.msgOk = 'Consulta atualizada com sucesso!';
          this.msgErro = null;
          this.resetForm();
          formRef.resetForm();
          this.load();
        },
        error: (e) => {
          this.msgErro = 'Erro ao atualizar consulta. Tente novamente.';
          this.msgOk = null;
          console.error(e);
        },
      });
      return;
    }

    this.consultas.createConsulta(payload).subscribe({
      next: () => {
        this.msgOk = 'Consulta criada com sucesso!';
        this.msgErro = null;
        this.resetForm();
        formRef.resetForm();
        this.load();
      },
      error: (e) => {
        this.msgErro = 'Erro ao criar consulta. Tente novamente.';
        this.msgOk = null;
        console.error(e);
      },
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
