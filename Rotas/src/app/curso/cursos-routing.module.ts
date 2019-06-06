import { CursoNaoEncotradoComponent } from './curso-nao-encotrado/curso-nao-encotrado.component';
import { CursoDetalhesComponent } from './curso-detalhes/curso-detalhes.component';
import { CursosComponent } from './cursos/cursos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const cursosroutes: Routes = [
  { path: '', component: CursosComponent },
  { path: 'cursoNaoEncontrado', component: CursoNaoEncotradoComponent },
  { path: ':id', component: CursoDetalhesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(cursosroutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
