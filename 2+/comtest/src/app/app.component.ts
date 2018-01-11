import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>Parent</h1>
  Child->Parent: <div class="bg">{{dataFromChild}}</div>
  <br>
  Parent->Child: <input #parentInput (keyup)="0"/>
  <br>
  <child [parentData]="parentInput.value" (childChanged)="dataFromChild = $event"></child>
  `
})
export class AppComponent {

  dataToBeSent: string;
  title = 'app';

  constructor(){
  }
}
