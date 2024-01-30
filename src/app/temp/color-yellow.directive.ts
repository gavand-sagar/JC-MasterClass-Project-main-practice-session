import { Directive, ElementRef } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Directive({
  selector: 'p'
})
export class ColorYellowDirective {

  constructor(private el: ElementRef,private s:MyServiceService) {
    this.el.nativeElement.style.backgroundColor = 'yellow'
  }

}
