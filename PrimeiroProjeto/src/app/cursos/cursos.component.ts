import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cur: String = 'Loiane';
  cursos: String[];

  constructor(private cursosService: CursosService) {

    // Forma manual de instância
    // let cursosService = new CursosService();

    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit() {
  }
}
