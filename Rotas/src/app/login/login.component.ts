import { UsuarioComponent } from './../model/usuario.class.component';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioComponent = new UsuarioComponent();

  constructor(private loginService: LoginService) { }

  ngOnInit() {

  }

  realizarLogin() {
    this.loginService.realizarLogin(this.usuario);
  }
}
