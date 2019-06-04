import { CursosRoutingModule } from './cursos-routing.module';
import { CursosService } from './cursos.service';
import { CursosComponent } from './cursos.component';
import { CursoDetalhesComponent } from './curso-detalhes/curso-detalhes.component';
import { CursoNaoEncotradoComponent } from './curso-nao-encotrado/curso-nao-encotrado.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CursosComponent,
        CursoDetalhesComponent,
        CursoNaoEncotradoComponent
    ],
    imports: [
        CommonModule,
        CursosRoutingModule
    ],
    exports: [],
    providers: [
        CursosService
    ]
})
export class CursosModule { 

}