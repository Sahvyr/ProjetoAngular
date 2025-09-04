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

  ngOnInit(): void {
    this.getAvisos();
    this.postAvisos();
  }

  postAvisos() {
    this.funcionarios.postUser().subscribe();
  }

  getAvisos() {
    this.funcionarios.getUsers().subscribe((funcionarios) => {
      console.log(funcionarios);
    });
  }
}
