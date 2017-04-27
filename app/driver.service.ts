import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Driver } from './driver';
import 'rxjs/add/operator/map';

@Injectable()
export class DriverService{
  private baseUrl: string = 'http://localhost:8080/RestfulWebServiceTutorials/webservice/formula1';

  constructor(private http : Http){
  }

  getAll(){
    return this.http.get(`${this.baseUrl}/driverList/`).map((response:Response)=>response.json());
  }

  get(driverId: number): Observable<Driver> {
    let driver$ = this.http
      .get(`${this.baseUrl}/getViaId/${driverId}`, {headers: this.getHeaders()})
      .map(mapDriver);
      return driver$;
  }

  save(driver: Driver) : Observable<Response>{

    console.log(JSON.stringify(driver));

    return this.http
      .post(`${this.baseUrl}/updateDriver`, JSON.stringify(driver), {headers: this.getHeaders()});
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}

function toDriver(r:any): Driver{
  let driver = <Driver>({
    driverId: r.driverId,
    driverName: r.driverName,
    driverSurname: r.driverSurname,
    driverCountry: r.driverCountry,
    driverTeam: r.driverTeam
  });
  console.log('Parsed driver:', driver);
  return driver;
}

function mapDriver(response:Response): Driver{
  // toPerson looks just like in the previous example
  return toDriver(response.json());
}

// this could also be a private method of the component class
function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}