import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';

import { AppComponent }  from './app.component';
import { DriverListComponent } from './driver-list.component';
import { DriverDetailsComponent } from './driver-details.component';

@NgModule({
  imports: [ BrowserModule, routing, FormsModule, HttpModule],
  declarations: [ AppComponent, DriverListComponent, DriverDetailsComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }