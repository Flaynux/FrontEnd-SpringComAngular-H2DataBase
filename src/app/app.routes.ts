import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'lista-produtos', pathMatch: 'full' },
    {
        path: 'lista-produtos',
        loadComponent: () => import('./pages/lista-produtos/lista-produtos').then(m => m.ListaProdutos)
    },
    {
        path: 'cadastro-produtos',
        loadComponent: () => import('./pages/cadastro-produtos/cadastro-produtos').then(m => m.CadastroProdutos)
    },
    {
        path: '**', redirectTo: 'lista-produtos'
    },
    {
        path: 'lista-pessoas-fisicas',
        loadComponent: () => import('./pages/lista-pessoas-fisicas/lista-pessoas-fisicas').then(m => m.ListaPessoasFisicas)
    },
    {
        path: 'cadastro-pessoa-fisica',
        loadComponent: () => import('./pages/cadastro-produtos/cadastro-produtos').then(m => m.CadastroProdutos)
    }

];
