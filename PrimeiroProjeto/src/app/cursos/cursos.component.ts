import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cur:String = 'Loiane';
  cursos:String[] = ['Java', 'C', 'Angular'];

  constructor() { }

  ngOnInit() {
  }

  

}
