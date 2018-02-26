import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({ selector: '[textBlue]' })
export class TextBlueDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.textColor('blue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.textColor(null);
  }

  private textColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}