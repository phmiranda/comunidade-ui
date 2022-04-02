import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth/auth.component';
import { CursoComponent } from './component/curso/curso.component';
import { DuvidaComponent } from './component/duvida/duvida.component';
import { RespostaComponent } from './component/resposta/resposta.component';
import { UsuarioComponent } from './component/usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CursoComponent,
    DuvidaComponent,
    RespostaComponent,
    UsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
