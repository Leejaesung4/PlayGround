import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[textColor]'
})
export class TextColorDirective {

  // 어트리뷰트 호스트에서 프로퍼티 바인딩한 값을 전달 받는다.
  @Input('textColor') color: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.textColor(this.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.textColor(null);
  }

  private textColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}