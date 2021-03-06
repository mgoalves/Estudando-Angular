import { AlunosResolve } from './../guards/alunos.resolver';
import { FormsModule } from '@angular/forms';
import { AlunosService } from './alunos.service';
import { AlunosRoutingModule } from './alunos-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosDetalhesComponent } from './alunos-detalhes/alunos-detalhes.component';

@NgModule({
  declarations: [
    AlunosComponent,
    AlunosFormComponent,
    AlunosDetalhesComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule
  ],
  providers: [
    AlunosService,
    AlunosResolve
  ]
})
export class AlunosModule { }
