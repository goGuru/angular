import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeroesComponent } from './heroes.component';


@NgModule({
  declarations: [
    HeroesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HeroesComponent]
})
export class HeroesModule { }
