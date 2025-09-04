import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Funcionarios {
  private apiUrl = 'https://node-vercel-app-rho.vercel.app/api/mural-avisos';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.apiUrl);
  }

  postUser() {
    return this.http.post(this.apiUrl, {
      turma: '20wps17',
      message: 'teste 01',
      link: '--',
      deadline: '03/09/2025',
    });
  }
}
