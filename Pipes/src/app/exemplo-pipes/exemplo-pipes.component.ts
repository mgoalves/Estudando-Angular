import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrls: ['./exemplo-pipes.component.css']
})
export class ExemploPipesComponent implements OnInit {


  livro: any = {

    titulo: 'Titulo Meu Bom o certo',
    rating: 4.5,
    numPaginas: 245,
    preco: 23.99,
    dataLancamento: new Date(2019, 1, 1)

  };
  livros: string[] = ['Angular', 'Java'];
  filtro: string;

  constructor() { }

  ngOnInit() {
  }

  addLivro(livro: string) {
    this.livros.push(livro);
  }

}
