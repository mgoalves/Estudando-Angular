import { UsuarioComponent } from './../model/usuario.class.component';
import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usuarioLogado: boolean = false;
  loginEmmiter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) {

  }

  realizarLogin(usuario: UsuarioComponent) {

    if (usuario.user === 'user@email.com' && usuario.password === '123') {

      this.usuarioLogado = true;
      this.loginEmmiter.emit(true);
      this.router.navigate(['']);

    } else {

      this.usuarioLogado = false;
    }
  }
}
