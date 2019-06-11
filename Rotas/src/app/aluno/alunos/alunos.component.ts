import { Aluno } from './../../model/aluno.class';
import { AlunosService } from './../alunos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit, OnDestroy {

  listaAlunos: Aluno[] = [];

  constructor(private alunosService: AlunosService) {

  }

  ngOnInit() {
    this.listaAlunos = this.alunosService.getListaAlunos();
  }

  ngOnDestroy(): void {
  }
}
