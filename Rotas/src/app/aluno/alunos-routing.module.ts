import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosGuard } from './../guards/alunos.guard';
import { AlunosDetalhesComponent } from './alunos-detalhes/alunos-detalhes.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosComponent } from './alunos/alunos.component';

const alunosROUTES: Routes = [
    {
        path: '', component: AlunosComponent, canActivateChild: [AlunosGuard], children: [
            { path: 'novo', component: AlunosFormComponent },
            { path: ':id', component: AlunosDetalhesComponent },
            { path: ':id/editar', component: AlunosFormComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(alunosROUTES)],
    exports: [RouterModule]
})
export class AlunosRoutingModule { }
