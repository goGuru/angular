import { Component, Input, OnChanges } from '@angular/core';
import { Site } from '../sidebar/site';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input() siteToShow: Site;
  lastSite: Site;
  content: String;

  constructor() { 
    this.lastSite = this.siteToShow; 
  }

  ngOnChanges(){
    if(this.siteToShow != this.lastSite){
      this.content = this.siteToShow.url;
      this.lastSite = this.siteToShow;
    }
  }
}
