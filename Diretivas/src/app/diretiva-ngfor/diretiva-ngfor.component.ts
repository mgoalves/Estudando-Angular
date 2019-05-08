import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.css']
})
export class DiretivaNgforComponent implements OnInit {

  listaCursos: string[] = ['C', 'Java', 'Spring Boot', 'Angular', 'SQL', 'Vue', 'Node', 'JS', 'Wordpress'];

  constructor() { }

  ngOnInit() {
  }

}
