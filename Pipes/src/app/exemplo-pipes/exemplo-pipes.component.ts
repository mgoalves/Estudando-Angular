import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrls: ['./exemplo-pipes.component.css']
})
export class ExemploPipesComponent implements OnInit {


  livro: any = {
    
    titulo: 'Titulo',
    rating: 4.5,
    numPaginas: 245,
    preco: 23.99,
    dataLancamento: new Date(2019, 1, 1)

  };

  constructor() { }

  ngOnInit() {
  }

}
