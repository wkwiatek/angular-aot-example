import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <a [routerLink]="['lazy']">Lazy root</a>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
