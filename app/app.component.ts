import { Component } from '@angular/core';
import { DriverService } from './driver.service';


@Component({
  selector: 'my-app',
  template: `
  <h1> {{title}} </h1>
  <router-outlet>
  `,
  providers: [DriverService]
})
export class AppComponent {
  title:string = 'Formula 1 Drivers';
}