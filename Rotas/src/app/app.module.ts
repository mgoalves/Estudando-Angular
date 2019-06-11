import { AlunosDeactivateGuard } from './guards/alunos-deactive.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { AuthGuard } from './guards/auth.guard';
import { LoginService } from './login/login.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    LoginService,
    AuthGuard,
    AlunosGuard,
    AlunosDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
