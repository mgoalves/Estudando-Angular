import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private loginService: LoginService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    return this.verificaAcesso();
  }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {

    return this.verificaAcesso();
  }

  private verificaAcesso(): boolean {
    if (this.loginService.isUsuarioLogado()) {

      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}