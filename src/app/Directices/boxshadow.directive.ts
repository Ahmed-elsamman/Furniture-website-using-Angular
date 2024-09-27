import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[Boxshadow]',
  standalone: true
})
export class BoxshadowDirective  implements OnChanges{

  @Input() borderColorOnOver:string='black'
  @Input('Boxshadow') borderColorOnOut:string='black'
  constructor(private elemRef:ElementRef) {
    // this.elemRef.nativeElement.style.border='5px solid red'
  }
  ngOnChanges(changes: SimpleChanges): void {
    // this.elemRef.nativeElement.style.border=`2px solid ${this.borderColorOnOut}`
  }
  @HostListener('mouseover') onMouseOver(){
    this.elemRef.nativeElement.style.boxShadow='0px 0px 10px 3px gold';
    // this.elemRef.nativeElement.style.border=`2px solid ${this.borderColorOnOver}`


  }
  @HostListener('mouseout') onMouseOut(){
    this.elemRef.nativeElement.style.boxShadow='0px 0px 5px 1px black';
    // this.elemRef.nativeElement.style.border=`2px solid ${this.borderColorOnOut}`


  }

}
