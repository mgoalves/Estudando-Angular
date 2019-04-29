import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  valor: number = 5;
  deleteCiclo: boolean = false;

  mudarValor() {
    this.valor++;
  }

  destruirCiclo() {
    this.deleteCiclo = !this.deleteCiclo;
  }
}
