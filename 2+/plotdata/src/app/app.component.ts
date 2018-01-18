import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <button (click)="generate()">Generate</button>
  <circle [inData]="circleData"></circle>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  circleData: number[];

  constructor(){
    this.circleData = new Array();
    this.generate();
  }

  generate(){
    let newCircleData:number[] = Array();

    
    for(var i = 0;i < 10; i++){
      newCircleData[i] = Math.floor(Math.random() * 6) + 1;
    }

    
    this.circleData = newCircleData;
  }
}
