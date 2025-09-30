import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListaFuncionario } from './lista-funcionario/lista-funcionario';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { FormularioFuncionario } from './formulario-funcionario/formulario-funcionario';
import { Admin } from './admin/admin';
import { Login } from './login/login';
import { Configuracoes } from './configuracoes/configuracoes';
import { Profile } from './profile/profile';
import { Detalhes } from './detalhes/detalhes';
import { MatTableModule } from '@angular/material/table';
import { Card } from './card/card';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    App,
    ListaFuncionario,
    FormularioFuncionario,
    Admin,
    Login,
    Configuracoes,
    Profile,
    Detalhes,
    Card,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
