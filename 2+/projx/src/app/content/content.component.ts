import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `{{topicName}}`,
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() topicName;

  constructor() {}

  ngOnInit() {
  }
}