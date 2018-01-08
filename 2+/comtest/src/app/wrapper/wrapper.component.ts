import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {

  @Input() inData: string;
  content: string;

  constructor() { 
   }

  ngOnInit() {
  }

  ngOnChanges(){
    this.content = this.inData;
  }
}
