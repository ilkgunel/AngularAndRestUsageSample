import { Routes, RouterModule } from '@angular/router';

import { DriverListComponent } from './driver-list.component';
import { DriverDetailsComponent } from './driver-details.component';

// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'drivers',
    component: DriverListComponent,
  },
  // map '/persons/:driverId' to person details component
  {
    path: 'drivers/:driverId',
    component: DriverDetailsComponent
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/drivers',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);