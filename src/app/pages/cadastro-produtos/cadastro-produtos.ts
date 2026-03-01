import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-produtos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro-produtos.html',
  styleUrl: './cadastro-produtos.css',
})
export class CadastroProdutos {

  produto: Produto = {
    descricao_produto: '',
    quantidade: 0,
    preco: 0
  };

  constructor(private produtoService: ProdutoService, private router: Router) { }

  salvar(): void {
    if (!this.produto.descricao_produto || this.produto.descricao_produto.trim() === '') {
      alert('O nome do produto é obrigatório');
      return;
    }

    if (!this.produto.preco || this.produto.preco <= 0) {
      alert('O preço do produto é obrigatório');
      return;
    }

    if (!this.produto.quantidade || this.produto.quantidade <= 0) {
      alert('A quantidade do produto é obrigatório');
      return;
    }

    this.produtoService.criar(this.produto).subscribe({
      next: () => {

        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/lista-produtos']);
        });
      },
      error: (erro) => {
        console.error('Erro ao salvar: ', erro);
        alert('Erro ao salvar');
      }
    });
  }

  voltarTelaProdutos(): void {
    this.router.navigate(['/lista-produtos']);
  }

}
