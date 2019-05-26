import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from './cursos.service';
import { query } from '@angular/core/src/render3';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos = [];
  pagina: number;
  insActRoute: Subscription;

  constructor(private cursosService: CursosService, private activedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    this.insActRoute = this.activedRoute.queryParams.subscribe(

      (query) => {
        this.pagina = query['pagina'];
      });
  }

  ngOnDestroy(): void {
    this.insActRoute.unsubscribe();
  }

  proximaPagina(): void {
    this.pagina++;
    this.router.navigate(['/cursos'], { 'queryParams': { 'pagina': this.pagina } });
  }
}
