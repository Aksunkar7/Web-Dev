// Updating the Component Class

import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` Hello {{city}}, {{5*9}}`,
})
export class App {
city = 'San Francisco'
  
}
