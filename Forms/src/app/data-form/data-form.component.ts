import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
      nome: [null],
      email: [null]
    });
  }

  onSubmit() {

    this.httpClient.post('https://httpbin.org/post', JSON.stringify(this.forms.value)).subscribe(
      res => {
        console.log(res);
      }
    );
  }
}
