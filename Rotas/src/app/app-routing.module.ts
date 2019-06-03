import { CursoNaoEncotradoComponent } from './cursos/curso-nao-encotrado/curso-nao-encotrado.component';
import { CursoDetalhesComponent } from './cursos/curso-detalhes/curso-detalhes.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'curso/:id', component: CursoDetalhesComponent},
  { path: 'login', component: LoginComponent },
  { path: 'cursoNaoEncontrado', component: CursoNaoEncotradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
