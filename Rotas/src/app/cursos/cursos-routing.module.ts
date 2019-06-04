import { CursoNaoEncotradoComponent } from './curso-nao-encotrado/curso-nao-encotrado.component';
import { CursoDetalhesComponent } from './curso-detalhes/curso-detalhes.component';
import { CursosComponent } from './cursos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const cursosroutes: Routes = [
  { path: 'cursos', component: CursosComponent },
  { path: 'curso/:id', component: CursoDetalhesComponent },
  { path: 'cursoNaoEncontrado', component: CursoNaoEncotradoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(cursosroutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
