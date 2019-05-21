import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-detalhes',
  templateUrl: './curso-detalhes.component.html',
  styleUrls: ['./curso-detalhes.component.css']
})
export class CursoDetalhesComponent implements OnInit {

  id: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
   }

  ngOnInit() {
  }

}
