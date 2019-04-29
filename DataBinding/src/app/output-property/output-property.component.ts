import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;
  @Output() mudouValor = new EventEmitter();
  @ViewChild('campoInput') campoValorInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  incrementar() {
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementar() {
    this.valor--;
    this.mudouValor.emit({ novoValor: this.valor });
  }
}
