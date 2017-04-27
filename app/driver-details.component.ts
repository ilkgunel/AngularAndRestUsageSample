import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { Driver } from './driver';
import { DriverService } from './driver.service';

@Component({
  selector: 'driver-details',
  templateUrl: 'app/driver-details.component.html'
})
export class DriverDetailsComponent implements OnInit, OnDestroy {
    driver: Driver;
    sub: any;
    teams: string[] = ['Scuderia Ferrari', 'McLaren', 'Mercedes AMG Petronas','Toyota'];

    constructor(private driverService: DriverService,
                private route: ActivatedRoute,
                private router: Router){
    }

    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
          let driverId = Number.parseInt(params['driverId']);
          console.log('getting person with id: ', driverId);
          this.driverService
            .get(driverId)
            .subscribe(p => this.driver = p);
        });
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }

    gotoDriversList(){
        let link = ['/drivers'];
        this.router.navigate(link);
    }

    saveDriverDetails(){
      let link = ['/drivers'];
      this.driverService
          .save(this.driver)
          .subscribe(
            (r: Response) => {this.router.navigate(link);}
          );
    }
}
