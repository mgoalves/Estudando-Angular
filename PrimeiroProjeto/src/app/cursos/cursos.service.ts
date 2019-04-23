import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos(): String[] {
    return ['Java', 'C', 'Angular'];
  }
}
