import { Component } from '@angular/core';

@Component({
  selector: 'app-teste',
  standalone: false,
  templateUrl: './teste.html',
  styleUrl: './teste.css',
})
export class Teste {
  teste: string = 'teste de bind componente';
  teste2(): string {
    return 'teste de bind função';
  }

  resultado: number = 0;
  calcular(x: number, y: number) {
    this.resultado = x + y;
  }
}
