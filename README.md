# Anotações:

Docs: https://angular.io/docs

1 - Ao criar um módulo, precisa importar no AppModule.

2 - Caso queira usar algum componente dentro de um módulo qualquer 
	no AppModule, não esquecer de no exports colocar a classe.
	
3 - Sempre que fizer alteração nas classes de módulos e configurações,
	parar e subir o server.

4 - Bindings: 
		() -> Template para o Componente 
		[] -> Componente para o Template
		[()] -> Ambos 

 5 - Testes:
 	 Unitário = Jasmine (jasmine.github.io)	e o Karma
	 Integração = Protractor 

6 - Diretivas:
	*ngIf -> Quando utilizar uma árvore DOM muito grande, caso contrário 
			 usar o hidden para melhor performance.
	[ngSwitch] -> *ngSwitchCase e *ngSwitchDefault

7 - Bootstrap
	1º) npm install --save bootstrap
	2º) No arquivo angular.json em styles add: "node_modules/bootstrap/dist/css/bootstrap.min.css"

# CLI

ng new [nomeProjeto]
cd [nomeProjeto]
ng serve

ng g(enerate) c(omponent) [nome]
ng g(enerate) m(odule) [nome]
ng g(enerate) s(ervice) [nome]]
ng g(enerate) d(irective) [nome]
ng g(enerate) p(ipe) [nome]
ng g(enerate) c(lass) [nome]
ng g(enerate) e(num) [nome]
ng g(enerate) i(nterface) [nome]

ng lint
ng test
ng e2e 

ng build 
ng build --prod (mimificado)

# Diretórios

e2e          - Configurações de testes
node_modules - Bibliotecas
environment  - Config de deploy/build