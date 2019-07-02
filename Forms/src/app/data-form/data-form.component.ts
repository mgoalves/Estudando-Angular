import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  forms: FormGroup;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {

  }

  ngOnInit() {

    this.forms = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
        numero: [null, [Validators.required]],
        complemento: [null, [Validators.maxLength(60)]],
        rua: [null, []],
        bairro: [null, []],
        cidade: [null, []],
        estado: [null, []]
      })
    });
  }

  onSubmit() {

    this.httpClient.post('https://httpbin.org/post', JSON.stringify(this.forms.value)).subscribe(
      res => {
        this.resetForm();
      },
      error => {
        alert('Erro');
      }
    );
  }

  resetForm() {
    this.forms.reset();
  }

  verificaInvalidTouched(campo: string): boolean {
    return !this.forms.get(campo).valid && this.forms.get(campo).touched;
  }

  aplicaCssMsgErro(campo: string) {
    return {
      'invalid-feedback': this.verificaInvalidTouched(campo),
      'hidden': !this.verificaInvalidTouched(campo)
    }
  }
}
