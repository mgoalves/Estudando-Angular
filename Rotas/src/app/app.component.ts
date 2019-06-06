import { LoginService } from './login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = 'Rotas';
  mostrarNavBar: boolean = false;

  constructor(private loginService: LoginService) {

  }

  ngOnInit(): void {
    this.loginService.loginEmmiter.subscribe(
      mostrar => this.mostrarNavBar = mostrar
    );
  }
}
