import { Component } from '@angular/core';
import { WidgetComponent } from './widget/widget.component';

@Component({
  selector: 'app-root',
  template: `
    <app-widget></app-widget>
`,
  styleUrls: ['./app.component.css'],
  providers: [WidgetComponent]
})
export class AppComponent {
  title = 'app';
}
