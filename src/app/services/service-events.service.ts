import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceEvent } from '../serviceEvent';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceEventsService {

  // private serviceEventsUrl = 'http://localhost:52836/api/ServiceActions';
  private serviceEventsUrl = 'https://servicehubapi2.azurewebsites.net/api/serviceevent';

  

  constructor(private http: HttpClient) { }

  getServiceEvents(): Observable<ServiceEvent[]> {
    return this.http.get<ServiceEvent[]>(this.serviceEventsUrl);
  }

  addServiceEvent(serviceEvent: ServiceEvent) : Observable<ServiceEvent> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post<ServiceEvent>(this.serviceEventsUrl, serviceEvent,httpOptions);
  }

}
