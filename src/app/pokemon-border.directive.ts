import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appPokemonBorder]'
})
export class PokemonBorderDirective {
   private initialcolor: string;
  constructor(private el: ElementRef) {
      this.initialcolor = this.el.nativeElement.style.borderColor;
      this.el.nativeElement.style.borderWidth = '2px';
  }
  @HostListener('mouseenter') onMouseEnter() {
    const color = 'green';
    this.setBorderColor(color);
  }
  @HostListener('mouseleave') onMouseLeave() {
    const color = this.initialcolor;
    this.setBorderColor(color);
  }
  private setBorderColor(color: string) {
    this.el.nativeElement.style.borderColor = color;
  }

}
