import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.css']
})
export class OperadorElvisComponent implements OnInit {


  pessoa = {

    endereco: {

      cidade: {
        nome: 'NY'
      }
    }
  };
  pessoa2 = {

    endereco: null
  };

  constructor() { }

  ngOnInit() {
  }

}
