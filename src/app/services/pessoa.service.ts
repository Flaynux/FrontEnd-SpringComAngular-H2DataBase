import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/pessoa.model';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {

  private apiUrl = 'http://localhost:8080/admin/pessoafisica';

  constructor(private http: HttpClient) { }

  listarPessoasFisicas(): Observable<Pessoa[]> { //metodo para pegar pessoas em vetor
    return this.http.get<Pessoa[]>(this.apiUrl); //retorna o vetor que está dentro da url
  }

  criarPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.apiUrl, pessoa);
  }


}
