import { Component, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'child',
  //templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  template: `
  <h1>Child</h1>
  Parent->Child: <div class="bg">{{parentData}}</div>
  <br>
  Child->Parent: <input #childInput type="text" (keyup)="onChange(childInput.value)">
  `,
  inputs: ['parentData'],
  outputs: ['childChanged']
})
export class ChildComponent implements OnInit {

  parentData: string;
  outData: string;
  childChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onChange(value:string){
    this.childChanged.emit(value);
  }

}
