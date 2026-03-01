import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';


@Injectable({
  providedIn: 'root',
})
export class ProdutoService {

  private apiUrl = 'http://localhost:8080/admin/produto';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  criar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, produto);
  }
}
