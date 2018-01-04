import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  top: string = "Top";
  middle: string = "Middle";
  bottom: string = "Bottom";

  constructor() { }

  ngOnInit() {
  }

}
