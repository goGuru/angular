import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CircleComponent } from './circle/circle.component';
import { UtilsService } from './utils.service';
import { ERectComponent } from './e-rect/e-rect.component';


@NgModule({
  declarations: [
    AppComponent,
    CircleComponent,
    ERectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
