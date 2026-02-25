// Composing Components

import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  template: ` Username: {{ username }} `,
})
export class User {
  username = 'youngTech';
}

@Component({
  selector: 'app-root',
  template: `<section style="color:blue" > <app-user /> </section>`,
  imports: [User],
})
export class App {}
