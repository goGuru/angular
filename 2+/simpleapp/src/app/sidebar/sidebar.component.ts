import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Site } from './site';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor() { }
  subSites: Site[] = [];

  @Output() onNewSite = new EventEmitter<Site>();

  ngOnInit(){
    this.subSites.push(
      new Site("Home","localhost:4200"),
      new Site("Heroes","localhost:4200/heroes")
    );
  }

  goto(site){
    this.onNewSite.emit(site);
  }

}
