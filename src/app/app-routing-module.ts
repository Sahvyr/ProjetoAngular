import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioFuncionario } from './formulario-funcionario/formulario-funcionario';
import { ListaFuncionario } from './lista-funcionario/lista-funcionario';

const routes: Routes = [
  { path: 'cadastrar', component: FormularioFuncionario },
  { path: 'lista', component: ListaFuncionario },
  { path: '', redirectTo: '/lista', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
