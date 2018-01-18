import { Component } from '@angular/core';
import { WidgetComponent } from './widget/widget.component';
import { BackwardsDirective } from './backwards.directive';

@Component({
  selector: 'app-root',
  template: `
  <div appBackwards>Tja</div>
    <app-widget></app-widget>
`,
  styleUrls: ['./app.component.css'],
  providers: [WidgetComponent, BackwardsDirective],
})
export class AppComponent {
  title = 'app';
}
