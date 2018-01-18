import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { heroReducer } from './store/hero.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({heroes: heroReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
