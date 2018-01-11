import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LeftchildComponent } from './leftchild/leftchild.component';
import { RightchildComponent } from './rightchild/rightchild.component';

@Component({
  selector: 'app-widget',
  template: `
    <input #rawData type="text" (keydown)="0">
    <br>
    <app-leftchild [inData]="rawData.value"></app-leftchild>
    <br>
    <app-rightchild [inData]="rawData.value"></app-rightchild>
    <br>
    <div style="border: solid gray 2px; width: 60px;" (click)="onAlert()">{{divData}}</div>
  `,
  styleUrls: ['./widget.component.css'],
  providers: [LeftchildComponent, RightchildComponent]
})
export class WidgetComponent implements OnInit {
  divData: string;
  constructor() {
    this.divData = "Click Me";
   }

  ngOnInit() { 
  }

  onAlert(){
    alert("Hi dude");
  }
}
