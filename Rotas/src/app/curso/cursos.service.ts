import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos: any[] = [
    { 'id': 1, 'name': 'Angular' },
    { 'id': 2, 'name': 'Node' }
  ];

  getCursos(): any[] {
    return this.cursos;
  }

  getCurso(id: number): any {

    for (const curso of this.cursos) {

      if (curso.id == id) {
        return curso;
      }
    }

    return null;
  }

  constructor() { }
}
