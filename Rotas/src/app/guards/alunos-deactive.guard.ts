import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { FormDeactive } from './../model/form-deactive.class';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<FormDeactive> {
  canDeactivate(
    component: FormDeactive,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    return component.podeMudarRota();
  }
}