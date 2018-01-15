import { Directive, ElementRef, NgModule ,OnInit } from '@angular/core';

@Directive({ selector: '[appBackwards]' })
export class BackwardsDirective{

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = '#444';
  }

  ngOnInit(){
    var text = this.el.nativeElement.innerHTML;
    var text_backwards = "";

    for(var i = text.length; i>=0;i--){
      text_backwards = text_backwards.concat(text.charAt(i));
    }

    this.el.nativeElement.innerHTML = text_backwards;
  }
}
