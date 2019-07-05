import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Estado } from './../models/estados.interface';


@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private httpClient: HttpClient) {

  }

  getEstados() {
    return this.httpClient.get<Estado[]>('assets/json/estados.json').pipe(map(res => res));
  }
}
