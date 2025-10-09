import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Funcionarios } from '../services/funcionarios';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  constructor(private route: ActivatedRoute, private funcionariosService: Funcionarios) {}

  @Input() id: string = '';
  @Input() nome: string = '';
  @Input() sobrenome: string = '';
  @Input() salario: number = 0;
  @Input() endereco: string = '';
  @Input() optouVT: boolean = false;

  deletarUsuario(id: string) {
    this.funcionariosService.deleteUserById(id).subscribe((data) => {
      console.log(data);
    });
  }
}
