import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[fundoVerde]'
})
export class FundoVerdeDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer) {

    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }
}
