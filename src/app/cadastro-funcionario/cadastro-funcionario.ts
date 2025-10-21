import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Funcionarios } from '../services/funcionarios';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface LoginForm {
  nome: FormControl<string>;
  sobrenome: FormControl<string>;
  sexo: FormControl<string>;
  dtNascimento: FormControl<string>;
  grauEscolaridade: FormControl<string>;
  endereco: FormControl<string>;
  foto: FormControl<string>;

  valorPassagem: FormControl<number>;
  optouVT: FormControl<boolean>;
  cargo: FormControl<string>;
  salario: FormControl<number>;
  dataInicio: FormControl<string>;
  dataDemissao: FormControl<string | null>;
}

@Component({
  selector: 'app-cadastro-funcionario',
  standalone: false,
  templateUrl: './cadastro-funcionario.html',
  styleUrl: './cadastro-funcionario.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CadastroFuncionario {
  constructor(private funcionarios: Funcionarios, private router: Router) {}

  funcionarioForm = new FormGroup<LoginForm>({
    nome: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
    sobrenome: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    sexo: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    dtNascimento: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    grauEscolaridade: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    endereco: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    foto: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    valorPassagem: new FormControl(0, { nonNullable: true, validators: [Validators.required] }),
    optouVT: new FormControl(false, { nonNullable: true, validators: [Validators.required] }),
    cargo: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    salario: new FormControl(0, { nonNullable: true, validators: [Validators.required] }),
    dataInicio: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    dataDemissao: new FormControl(null),
  });

  enviar() {
    this.funcionarios.postFuncionarios(this.funcionarioForm.value).subscribe((data) => {
      console.log(data);

      this.router.navigate(['/lista']);
    });
  }
}
