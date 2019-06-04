import { AlunosModule } from './aluno/alunos.module';
import { CursosModule } from './curso/cursos.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CursosModule,
    AlunosModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
