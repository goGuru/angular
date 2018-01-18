import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero.type';

@Component({
  selector: 'app-sidebar',
  template: `
    <ul>
      <li *ngFor="let hero of heroes">{{hero.name}}<br>{{hero.age}}</li>
    </ul>
      `,
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() heroes: Hero[];

  constructor() { }

  ngOnInit() {
  }

}
