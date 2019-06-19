import { NgModel } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null,
    endereco: {
      cep: null,
      numero: null,
      complemento: null,
      rua: null,
      bairro: null,
      cidade: null,
      estado: null
    }
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
    console.log(this.usuario);
  }

  verificaInvalidTouched(campo: NgModel): boolean {
    return !campo.valid && campo.touched;
  }
  aplicaCssMsgErro(campo: NgModel) {
    return {
      'invalid-feedback': this.verificaInvalidTouched(campo),
      'hidden': !this.verificaInvalidTouched(campo)
    }
  }
}
