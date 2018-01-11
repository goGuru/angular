import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-leftchild',
  template: `L: {{showData}}<br>C: {{counter}}`,
  styleUrls: ['./leftchild.component.css'],
  inputs: ['inData']
})
export class LeftchildComponent implements OnInit, OnChanges {
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