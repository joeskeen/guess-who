import { Component, Input } from '@angular/core';
import { Person } from './data.service';

@Component({
  selector: 'app-person',
  template: `
    <div class="person" [class.selected]="selected" (click)="toggleSelected()">
      <img [src]="person.email | monsterid | async" />
      <span>{{ person.name }}</span>
    </div>
  `,
  styles: [
    `
      .person {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5px;
        border: solid gray 1px;
        margin: 3px;
      }
      .selected {
        color: lightgray;
      }
      .selected img {
        opacity: 0.25;
      }
    `,
  ],
})
export class PersonComponent {
  @Input()
  person: Person;
  selected = false;

  toggleSelected() {
    this.selected = !this.selected;
  }
}
