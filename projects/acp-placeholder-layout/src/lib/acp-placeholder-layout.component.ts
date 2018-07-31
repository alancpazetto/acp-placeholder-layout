import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'acppl-acp-placeholder-layout',
  template: `
    <span
      acpplPlaceholderLayout
      [placeholderWidth]="width"
      [placeholderHeight]="height"
      [placeholderBackground]="background"
      [placeholderAnimationTime]="animationTime"
      [placeholderAnimationEasing]="animationEasing"
      [placeholderAnimationIteration]="animationIteration"
       ></span>
  `,
  styleUrls: ['./acp-placeholder-layout.component.scss']
})
export class AcpPlaceholderLayoutComponent implements OnInit {

  @Input() width = '100%';
  @Input() height = '14px';
  @Input() background = '#eee';
  @Input() animationTime = '1s';
  @Input() animationEasing = 'ease-in-out';
  @Input() animationIteration = 'infinite';

  constructor() { }

  ngOnInit() {
  }


}
