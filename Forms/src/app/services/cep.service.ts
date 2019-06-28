import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private httpClient: HttpClient) {

  }

  consultaCep(cep: string): Observable<any> {

    var cep = cep.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if (validacep.test(cep)) {

        return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json`);
      }
    }
  }
}
