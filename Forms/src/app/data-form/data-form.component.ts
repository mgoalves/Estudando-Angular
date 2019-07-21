import { Estado } from './../models/estados.interface';
import { DropdownService } from './../services/dropdown.service';
import { CepService } from './../services/cep.service';
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
  estados: Estado[];

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private cepService: CepService,
    private dropdownService: DropdownService
  ) {

  }

  ngOnInit() {

    // Carregando estados
    this.dropdownService.getEstados().subscribe(
      dados => {
        this.estados = dados;
      }
    );

    // Criando Forumlário
    this.forms = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(9)]],
        numero: [null, [Validators.required]],
        complemento: [null, [Validators.maxLength(60)]],
        rua: [null, [Validators.required]],
        bairro: [null, [Validators.required]],
        cidade: [null, [Validators.required]],
        estado: [null, [Validators.required]]
      })
    });
  }

  onSubmit() {

    if (this.forms.valid) {

      this.httpClient.post('https://httpbin.org/post', JSON.stringify(this.forms.value)).subscribe(
        res => {
          this.resetForm();
        },
        error => {
          alert('Erro');
        }
      );

    } else {

      this.verificaForm(this.forms);
    }
  }

  verificaForm(formGroup: FormGroup) {

    Object.keys(formGroup.controls).forEach(campo => {

      const controle = formGroup.get(campo);
      controle.markAsTouched();

      if (controle instanceof FormGroup) {
        this.verificaForm(controle);
      }
    });
  }

  private popularForm(data) {
    this.forms.patchValue({
      endereco: {
        cep: data.cep,
        rua: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        estado: data.uf
      }
    });
  }

  resetForm() {
    this.forms.reset();
  }

  buscaCep() {

    let cep = this.forms.get('endereco.cep').value;

    this.cepService.consultaCep(cep).subscribe(
      res => {
        this.popularForm(res);
      },
      error => {
        this.forms.get('endereco.cep').setValue(null);
        this.forms.get('endereco.cep').markAsTouched();
      }
    );
  }

  verificaInvalidTouched(campo: string): boolean {
    return !this.forms.get(campo).valid &&
      (this.forms.get(campo).touched || this.forms.get(campo).dirty);
  }

  aplicaCssMsgErro(campo: string) {
    return {
      'invalid-feedback': this.verificaInvalidTouched(campo),
      'hidden': !this.verificaInvalidTouched(campo)
    }
  }
}
