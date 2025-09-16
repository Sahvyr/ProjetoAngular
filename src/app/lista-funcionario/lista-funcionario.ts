import { Component, OnInit } from '@angular/core';
import { Funcionarios } from '../services/funcionarios';

@Component({
  selector: 'app-lista-funcionario',
  standalone: false,
  templateUrl: './lista-funcionario.html',
  styleUrl: './lista-funcionario.css',
})
export class ListaFuncionario implements OnInit {
  constructor(private funcionarios: Funcionarios) {}

  ngOnInit() {
    this.getFuncionarios();
  }

  funcionariosLista: any[] = [];

  getFuncionarios() {
    this.funcionarios.getUsers().subscribe((data: any) => {
      this.funcionariosLista = data;
    });
  }
}
