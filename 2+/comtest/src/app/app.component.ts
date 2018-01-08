import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() onClick = new EventEmitter<string>();
  
  dataToBeSent: string;
  title = 'app';
  childData = '';

  constructor(){
  }

  setValue(value: string){
      this.dataToBeSent = value;
      this.sendData();
  }

  sendData(){
    this.onClick.emit(this.dataToBeSent);
  }

  
}
