import { Component, OnInit } from '@angular/core';
import { Driver } from './driver';
import { DriverService } from './driver.service';

@Component({
  selector: 'driver-list',
  template: `
  <section>
    <section *ngIf="isLoading && !errorMessage">
    Loading our hyperdrives!!! Retrieving data...
    </section>
      <ul>
        <!-- this is the new syntax for ng-repeat -->
        <li *ngFor="let driver of drivers">
            <a href="#" [routerLink]="['/drivers', driver.driverId]">
          {{driver.driverName}} {{driver.driverSurname}}
          </a>
        </li>
      </ul>
      <section *ngIf="errorMessage">
        {{errorMessage}}
      </section>
  </section>
  `
})
export class DriverListComponent implements OnInit{
  drivers: Driver[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private driverService : DriverService){ }

  ngOnInit(){
    this.driverService
      .getAll()
      .subscribe(
         /* happy path */ d => this.drivers = d,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */ () => this.isLoading = false);
  }
}