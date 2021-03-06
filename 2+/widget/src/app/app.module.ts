import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { LeftchildComponent } from './widget/leftchild/leftchild.component';
import { RightchildComponent } from './widget/rightchild/rightchild.component';
import { BackwardsDirective } from './backwards.directive';


@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    LeftchildComponent,
    RightchildComponent,
    BackwardsDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
