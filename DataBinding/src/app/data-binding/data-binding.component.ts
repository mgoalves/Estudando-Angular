import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {


  url: string = 'http://github.com/mgoalves';
  like: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/nature/';
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  getValor(): number {
    return 2;
  }
  getFalse(): boolean {
    return false;
  }

  mostraLog(){
    console.log('Funcionou!');
  }

  mostraEvento(evento){
    this.valorAtual = evento.target.value;
  }
  salvarValor(evento){
    this.valorSalvo = evento;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }
}
