import { CepService } from './../services/cep.service';
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

  constructor(private cepService: CepService) { }

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

  buscaCEP(cep) {
    console.log(cep);
    this.cepService.consultaCep(cep);
  }
}
