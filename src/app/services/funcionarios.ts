import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Funcionarios {
  private apiUrl = 'https://node-vercel-app-rho.vercel.app/api/funcionarios';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.apiUrl);
  }

  getUserById(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteUserById(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  postFuncionarios(formulario: any) {
    return this.http.post(this.apiUrl, formulario);
  }

  atualizarUserById(id: string, formulario: any) {
    return this.http.put(`${this.apiUrl}/${id}`, formulario);
  }
}
