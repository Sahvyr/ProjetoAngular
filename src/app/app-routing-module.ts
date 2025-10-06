import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaFuncionario } from './lista-funcionario/lista-funcionario';
import { AuthGuard } from './guard/auth.guard';
import { Login } from './login/login';
import { Admin } from './admin/admin';
import { Configuracoes } from './configuracoes/configuracoes';
import { Profile } from './profile/profile';
import { Detalhes } from './detalhes/detalhes';
import { AtualizarFuncionario } from './atualizar-funcionario/atualizar-funcionario';
import { CadastroFuncionario } from './cadastro-funcionario/cadastro-funcionario';

const routes: Routes = [
  { path: 'cadastrar', component: CadastroFuncionario },
  { path: 'lista', component: ListaFuncionario },
  { path: '', redirectTo: '/lista', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'detalhes/:id', component: Detalhes },
  {
    path: 'admin',
    component: Admin,
    children: [
      { path: 'configuracoes', component: Configuracoes },
      {
        path: 'perfil',
        component: Profile,
      },
    ],
  },
  { path: 'atualizar/:id', component: AtualizarFuncionario },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
