import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked()">Click me!</button>
  `,
  styles: []
})
export class EventBindingComponent {
  onClicked(){
    alert("This button works!")
  }
}
