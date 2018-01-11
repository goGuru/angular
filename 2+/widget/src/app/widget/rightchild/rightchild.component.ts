import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rightchild',
  template: `R: {{showData}}<br>C: {{counter}}`,
  styleUrls: ['./rightchild.component.css'],
  inputs: ['inData']
})
export class RightchildComponent implements OnInit, OnChanges {
  inData : string;
  showData : string;
  counter : number;

  constructor() { this.showData="null"; this.counter = 0; }

  ngOnInit() {
  }

  ngOnChanges(){
    this.showData = this.inData;
    this.counter++;
  }
}
