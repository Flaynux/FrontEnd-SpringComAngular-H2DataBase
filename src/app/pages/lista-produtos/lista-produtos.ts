import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos implements OnInit {

  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService, private cdr: ChangeDetectorRef) {
    console.log('1. construtor chamado')
  }
  ngOnInit(): void {
    console.log('2. ngoninit chamado ')
    this.carregarProdutos();
  }


  carregarProdutos() {
    console.log('3 - chamando serviço');
    this.produtoService.listarTodos().subscribe({
      next: (dados) => {
        console.log('4 - dados recebidos', dados);
        console.log('5 - quantidade', dados.length);
        this.produtos = dados;
        this.cdr.detectChanges();
        console.log('6 - array de produtos atualizados', this.produtos);

        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao carregar produto: ', erro)
      }
    });


  }
}
