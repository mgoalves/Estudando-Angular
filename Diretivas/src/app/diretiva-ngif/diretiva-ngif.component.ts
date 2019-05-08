import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  listaCursos: string[] = ['Angular'];
  flagCursoPresencial: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  mudarFlagCurso() {
    this.flagCursoPresencial = !this.flagCursoPresencial;
  }
}
