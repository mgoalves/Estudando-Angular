import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  mostraConsole(msg: string) {
    console.log(msg);
  }
}
