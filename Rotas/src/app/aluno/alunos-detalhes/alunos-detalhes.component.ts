import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-alunos-detalhes',
  templateUrl: './alunos-detalhes.component.html',
  styleUrls: ['./alunos-detalhes.component.css']
})
export class AlunosDetalhesComponent implements OnInit, OnDestroy {

  subscriptionActive: Subscription;
  aluno: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router
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

  editarAluno() {
    console.log('navegou');
    this.router.navigate(['alunos', this.aluno.id, 'editar']);
  }
}
