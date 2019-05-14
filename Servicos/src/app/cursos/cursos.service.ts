import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

    static addNovoCurso = new EventEmitter<string>();

    cursos: string[] = ['Angular', 'WordPress'];

    constructor(){
        console.log('CursosService');
    }

    getCursos(): string[] {
        return this.cursos;
    }

    addCurso(curso: string) {
        this.cursos.push(curso);
        CursosService.addNovoCurso.emit(curso);
    }
}