import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-curso-detalhes',
	templateUrl: './curso-detalhes.component.html',
	styleUrls: ['./curso-detalhes.component.css']
})
export class CursoDetalhesComponent implements OnInit {

	id: number;
	subscriptionActive: Subscription;

	constructor(private activatedRoute: ActivatedRoute) {
	}

	ngOnInit() {

		this.subscriptionActive = this.activatedRoute.params.subscribe(
			(params) => { this.id = params['id'] }
		);
	}

	ngOnDestroy(): void {

		this.subscriptionActive.unsubscribe();
	}
}
