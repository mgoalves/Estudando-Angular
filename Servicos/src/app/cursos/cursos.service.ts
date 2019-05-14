import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

    cursos: string[] = ['Angular', 'WordPress'];

    constructor(){
        console.log('CursosService');
    }

    getCursos(): string[] {
        return this.cursos;
    }

    addCurso(curso: string) {
        this.cursos.push(curso);
    }
}