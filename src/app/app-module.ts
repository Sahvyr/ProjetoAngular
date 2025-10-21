import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListaFuncionario } from './lista-funcionario/lista-funcionario';
import { HttpClientModule } from '@angular/common/http';

import { Admin } from './admin/admin';
import { Login } from './login/login';
import { Configuracoes } from './configuracoes/configuracoes';
import { Profile } from './profile/profile';
import { Detalhes } from './detalhes/detalhes';
import { MatTableModule } from '@angular/material/table';
import { Card } from './card/card';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AtualizarFuncionario } from './atualizar-funcionario/atualizar-funcionario';
import { CadastroFuncionario } from './cadastro-funcionario/cadastro-funcionario';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    App,
    ListaFuncionario,
    Admin,
    Login,
    Configuracoes,
    Profile,
    Detalhes,
    Card,
    AtualizarFuncionario,
    CadastroFuncionario,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatRadioModule,
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
