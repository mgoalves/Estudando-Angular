import { Aluno } from './../../model/aluno.class';
import { FormDeactive } from './../../model/form-deactive.class';
import { Subscription } from 'rxjs';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit, OnDestroy, FormDeactive {

  subscriptionActive: Subscription;
  aluno: Aluno;
  mudouValor: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alunosService: AlunosService
  ) {
  }

  ngOnInit() {
    this.subscriptionActive = this.activatedRoute.params.subscribe(
      (params) => {
        this.aluno = this.alunosService.getAlunoID(params['id']);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscriptionActive.unsubscribe();
  }

  mudarValor(): void {
    this.mudouValor = true;
  }

  podeMudarRota(): boolean {

    if (this.mudouValor) {
      return confirm('Deseja realmente sair?');
    }

    return true;
  }
}
