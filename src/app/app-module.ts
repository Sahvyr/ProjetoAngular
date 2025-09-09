import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Teste } from './teste/teste';
import { Aula03 } from './aula03/aula03';
import { Aula04 } from './aula04/aula04';
import { ListaFuncionario } from './lista-funcionario/lista-funcionario';
import { HttpClientModule } from '@angular/common/http';
import { DeverAulaApi } from './dever-aula-api/dever-aula-api';

@NgModule({
  declarations: [App, Teste, Aula03, Aula04, ListaFuncionario, DeverAulaApi],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
