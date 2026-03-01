import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaProdutos } from "./pages/lista-produtos/lista-produtos";
import { CadastroProdutos } from './pages/cadastro-produtos/cadastro-produtos';
import { CommonModule } from '@angular/common';
import { CadastroPessoaFisica } from "./pages/cadastro-pessoa-fisica/cadastro-pessoa-fisica";
import { ListaPessoasFisicas } from "./pages/lista-pessoas-fisicas/lista-pessoas-fisicas";

@Component({
  selector: 'app-root',
  imports: [ListaProdutos, CadastroProdutos, CommonModule, CadastroPessoaFisica, ListaPessoasFisicas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend-Teste');
  secaoAtiva: string = 'lista';
}
