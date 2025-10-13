import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Funcionarios } from '../services/funcionarios';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  selector: 'app-atualizar-funcionario',
  standalone: false,
  templateUrl: './atualizar-funcionario.html',
  styleUrl: './atualizar-funcionario.css',
})
export class AtualizarFuncionario {
  constructor(private route: ActivatedRoute, private funcionariosService: Funcionarios) {}

  idUsuario: any = '';
  usuario: any;

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

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.idUsuario = params.get('id');
      this.getUserDetails(this.idUsuario);
    });
  }

  getUserDetails(id: string) {
    return this.funcionariosService.getUserById(id).subscribe((data: any) => {
      this.usuario = data;
      this.funcionarioForm.patchValue(data);
      console.log(this.usuario);
    });
  }

  atualizar(): any {
    console.log('atualizado');
  }
}
