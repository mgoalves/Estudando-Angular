import { LogService } from './../log.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

    static addNovoCurso = new EventEmitter<string>();

    cursos: string[] = ['Angular', 'WordPress'];

    constructor(private logService: LogService) {
        console.log('CursosService');
    }

    getCursos(): string[] {
        this.logService.mostraConsole('Obtendo listagem');
        return this.cursos;
    }

    addCurso(curso: string) {
        this.logService.mostraConsole('Add no curso ' + curso);
        this.cursos.push(curso);
        CursosService.addNovoCurso.emit(curso);
    }
}