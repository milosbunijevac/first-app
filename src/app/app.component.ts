import { Component } from '@angular/core';
import { DatabindingComponent } from './databinding/databinding.component';

@Component({
  selector: 'app-root',
  template: '<h1>{{title}}</h1> <app-databinding></app-databinding>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
