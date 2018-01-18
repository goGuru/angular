import { Component } from '@angular/core';
import { Topic } from '../types/topic.type';

@Component({
  selector: 'app-root',
  template: `
    <div class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <a href="../" class="navbar-brand">Project X</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav">
              <li class="nav-item dropdown" *ngFor="let topic of topics">
                <a class="nav-link" routerLink="{{topic.url}}">{{topic.name}}</a>
              </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  topics = [
    new Topic("Home",""),
    new Topic("Popular","popular"),
    new Topic("Latest","latest"),
    new Topic("All","all")
  ];

  activeSite = "";

  goto(topicName:string, topicUrl:string){
    this.activeSite = topicUrl;
    //window.location.href = topicUrl;
  }
}
