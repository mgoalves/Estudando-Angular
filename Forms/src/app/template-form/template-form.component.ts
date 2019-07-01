import { HttpClient } from '@angular/common/http';
import { CepService } from './../services/cep.service';
import { NgModel, NgForm } from '@angular/forms';
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

  constructor(private cepService: CepService, private httpClient: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    this.httpClient.post('https://httpbin.org/post', JSON.stringify(form.value)).subscribe(
      res => {
        console.log(res);
      }
    );
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

  buscaCEP(cep, formulario: NgForm) {

    console.log(cep);
    let cepSer = this.cepService.consultaCep(cep);
    cepSer.subscribe(data => {

      this.popularForm(data, formulario);
    });
  }

  private popularForm(data, formulario: NgForm) {
    formulario.form.patchValue({
      endereco: {
        cep: data.cep,
        rua: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        estado: data.uf
      }
    });
  }

}
