import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appContentContainer]'
})
export class ContentContainerDirective {

  constructor(el: ElementRef) { 
    el.nativeElement.style.maxWidth = "800px"
    el.nativeElement.style.margin = "10px auto 10px auto";
  }

}
