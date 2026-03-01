import { ChangeDetectorRef, Component } from '@angular/core';

import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../models/pessoa.model';

@Component({
  selector: 'app-lista-pessoas-fisicas',
  standalone: true,
  imports: [],
  templateUrl: './lista-pessoas-fisicas.html',
  styleUrl: './lista-pessoas-fisicas.css',
})
export class ListaPessoasFisicas {

  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService, private cdr: ChangeDetectorRef) {

  }
  ngOnInit(): void {
    this.carregarPessoa();
  }

  carregarPessoa() {
    this.pessoaService.listarPessoasFisicas().subscribe({
      next: (dados) => {
        this.pessoas = dados;
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao carregar a tabela pessoas: ', erro)
      }
    });
  }

}
