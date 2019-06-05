import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  listaAlunos: any[] = [
    { 'id': 1, 'name': 'aluno01', 'email': 'aluno01@email.com' },
    { 'id': 2, 'name': 'aluno02', 'email': 'aluno02@email.com' },
    { 'id': 3, 'name': 'aluno03', 'email': 'aluno03@email.com' }
  ];

  getListaAlunos(): any[] {
    return this.listaAlunos;
  }

  getAlunoID(id: number): any {
    for (const aluno of this.listaAlunos) {
      if (aluno.id == id) {
        return aluno;
      }
    }
    return null;
  }

  constructor() { }
}
