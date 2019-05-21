import { CursosService } from './../cursos/cursos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-curso-detalhes',
	templateUrl: './curso-detalhes.component.html',
	styleUrls: ['./curso-detalhes.component.css']
})
export class CursoDetalhesComponent implements OnInit {

	curso: any;
	subscriptionActive: Subscription;


	constructor(private activatedRoute: ActivatedRoute, private cursosService: CursosService, private router: Router) {
	}

	ngOnInit() {

		this.subscriptionActive = this.activatedRoute.params.subscribe(
			(params) => {
				this.curso = this.cursosService.getCurso(params['id']);
				if (this.curso === null) {
					this.router.navigate(['/cursoNaoEncontrado']);
				}
			}
		);
	}

	ngOnDestroy(): void {

		this.subscriptionActive.unsubscribe();
	}
}
