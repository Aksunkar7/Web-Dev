// Property Binding in Angular

import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.css'],
  template: ` <div [contentEditable]="isEditable"></div> `,  // [contentEditable]="isEditable" it is binding
})
export class App {
  isEditable = true;
}
