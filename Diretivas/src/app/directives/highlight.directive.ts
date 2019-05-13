import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.defaultHighlight;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;


  @Input() defaultColor: string = 'white';
  @Input() defaultHighlight: string = 'green';

  constructor() { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }
}
