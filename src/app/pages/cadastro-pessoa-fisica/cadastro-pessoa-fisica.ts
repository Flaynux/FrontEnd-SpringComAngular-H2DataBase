import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../models/pessoa.model';

@Component({
  selector: 'app-cadastro-pessoa-fisica',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro-pessoa-fisica.html',
  styleUrl: './cadastro-pessoa-fisica.css',
})
export class CadastroPessoaFisica {

  pessoa: Pessoa = {
    nome_pessoa_fisica: '',
  };

  constructor(private pessoaService: PessoaService) { }

  salvar(): void {
    if (!this.pessoa.nome_pessoa_fisica || this.pessoa.nome_pessoa_fisica.trim() === '') {
      alert('O nome é obrigatório');
      return;
    }
    this.pessoaService.criarPessoa(this.pessoa).subscribe({
      next: (pessoaSalva) => {
        window.location.href = '/lista-pessoas-fisicas?timestamp=' + new Date().getTime();
      },
      error: (erro) => {
        console.error('Erro ao salvar: ', erro)
        alert('Erro ao salvar')
      }
    });
  }
  voltar(): void {
    window.location.href = '/lista-pessoas-fisicas'
  }

}
