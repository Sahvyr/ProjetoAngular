import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Funcionarios } from '../services/funcionarios';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-funcionario',
  standalone: false,
  templateUrl: './cadastro-funcionario.html',
  styleUrl: './cadastro-funcionario.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CadastroFuncionario {
  constructor(private funcionarios: Funcionarios) {}
  funcionarioForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    sobrenome: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    dtNascimento: new FormControl('', Validators.required),
    grauEscolaridade: new FormControl('', Validators.required),
    endereco: new FormControl('', Validators.required),
    foto: new FormControl('', Validators.required),
    salarioAtual: new FormControl('', Validators.required),
    valorPassagem: new FormControl('', Validators.required),
    optouVT: new FormControl('', Validators.required),
    cargo: new FormControl('', Validators.required),
    salario: new FormControl('', Validators.required),
    dataInicio: new FormControl('', Validators.required),
    dataFim: new FormControl('', Validators.required),
  });

  enviar() {
    this.funcionarios.postFuncionarios(this.funcionarioForm.value).subscribe((data) => {
      console.log(data);
    });
  }
}
