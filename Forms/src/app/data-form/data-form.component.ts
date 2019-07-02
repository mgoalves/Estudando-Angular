import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      email: [null, [Validators.required, Validators.email]]
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
}
