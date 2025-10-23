import { Component, OnInit } from '@angular/core';
import { Funcionarios } from '../services/funcionarios';
import { Router } from '@angular/router';

interface Funcionario {
  _id: string;
  nome: string;
  sobrenome: string;
  dtNascimento: Date;
  salarioAtual: number;
  endereco: string;
  optouVT: boolean;
}

@Component({
  selector: 'app-lista-funcionario',
  standalone: false,
  templateUrl: './lista-funcionario.html',
  styleUrl: './lista-funcionario.css',
})
export class ListaFuncionario implements OnInit {
  displayedColumns: string[] = ['nome', 'sobrenome', 'dtNascimento', 'salario', 'detalhes'];

  funcionariosLista: Funcionario[] = [];
  idUsuario: any = '';
  usuario: any;

  constructor(
    private funcionarios: Funcionarios,
    private router: Router,
    private funcionariosService: Funcionarios
  ) {}

  ngOnInit() {
    this.getFuncionarios();
  }

  getFuncionarios() {
    this.funcionarios.getUsers().subscribe((data: any) => {
      this.funcionariosLista = data;

      console.log(this.funcionariosLista);
    });
  }

  detalhesFuncionarios(id: number) {
    this.router.navigate(['/detalhes', id]);
  }

  cadastrarFuncionario() {
    this.router.navigate(['/cadastrar']);
  }

  getUserDetails(id: string) {
    return this.funcionariosService.getUserById(id).subscribe((data: any) => {
      this.usuario = data;
      console.log(this.usuario);
    });
  }

}
