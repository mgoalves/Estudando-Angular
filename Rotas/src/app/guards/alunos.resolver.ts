import { AlunosService } from './../aluno/alunos.service';
import { Aluno } from './../model/aluno.class';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AlunosResolve implements Resolve<Aluno> {

    constructor(private alunosService: AlunosService) {

    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Aluno> | Promise<Aluno> | Aluno {

        console.log('AlunosResolve');
        let id = route.params['id'];
        return this.alunosService.getAlunoID(id);
    }
}
