import { Component } from '@angular/core';
import pessoas from '../mock/pessoas.json';

@Component({
  selector: 'app-aula03',
  standalone: false,
  templateUrl: './aula03.html',
  styleUrl: './aula03.css',
})
export class Aula03 {
  pessoas = pessoas;
}
