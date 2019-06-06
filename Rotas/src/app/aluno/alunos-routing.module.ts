import { AlunosDetalhesComponent } from './alunos-detalhes/alunos-detalhes.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosComponent } from './alunos/alunos.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const alunosROUTES: Routes = [
    {
        path: '', component: AlunosComponent, children: [
            {path: 'novo', component: AlunosFormComponent},
            {path: ':id', component: AlunosDetalhesComponent},
            {path: ':id/editar', component: AlunosFormComponent}
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(alunosROUTES)],
    exports: [RouterModule]
})
export class AlunosRoutingModule { }
