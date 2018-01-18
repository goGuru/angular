import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app.router';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { PopularComponent } from './popular/popular.component';
import { LatestComponent } from './latest/latest.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    PopularComponent,
    LatestComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
