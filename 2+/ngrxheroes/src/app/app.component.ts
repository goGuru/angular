import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromActions from './store/hero.action';
import { AddHero } from './store/hero.action';
import { Hero } from './models/hero.model';
import { Heroes } from './models/heroes.model';


interface AppState {
  heroes: Heroes;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Latest Heroes';

  heroes$: Observable<Heroes>;

  constructor(private store: Store<AppState>){
    this.heroes$ = this.store.select('heroes');
  }

  addHero(str:string){
    const hero: Hero = {
        name: str,
        age: 5
    }

    this.store.dispatch(new fromActions.AddHero(hero));
  }
}
