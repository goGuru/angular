import { Component } from '@angular/core';
import { Hero } from './hero.type';

@Component({
  selector: 'app-root',
  template: `
            <input #newHero type="text" (keyup.enter)="addHero(newHero.value)">
            <app-sidebar [heroes]="heroes"></app-sidebar>
            <app-content></app-content>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  heroes = new Array<Hero>();

  constructor(){
    this.heroes.push(
      new Hero("Bosse",40),
      new Hero("Lennart",30),
      new Hero("Göran",20)
    );
  }

  addHero(n:string){
    this.heroes.push(new Hero(n,5));
  }
}
