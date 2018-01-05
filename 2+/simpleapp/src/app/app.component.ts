import { Component } from '@angular/core';
import { Site } from './sidebar/site';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  siteToShow: Site;

  notifyContent(site:Site){
    this.siteToShow = site;
  }
}
