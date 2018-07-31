import { Directive, Input, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[acpplPlaceholderLayout]'
})
export class AcpPlaceholderLayoutDirective implements AfterViewInit {

  @Input() placeholderWidth: string;
  @Input() placeholderHeight = '12px';
  @Input() placeholderBackground = '#eee';
  @Input() placeholderAnimationTime = '1s';
  @Input() placeholderAnimationEasing = 'ease-in-out';
  @Input() placeholderAnimationIteration = 'infinite';
  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    console.log('DIRECTIVE VIEW AFTER', this.placeholderWidth);
    this.el.nativeElement.style.width = this.placeholderWidth;
    this.el.nativeElement.style.height = this.placeholderHeight;
    this.el.nativeElement.style.background = this.placeholderBackground;
    this.el.nativeElement.style.animationTime = this.placeholderAnimationTime;
  }

}
