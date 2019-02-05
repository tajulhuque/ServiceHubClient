import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceEvent } from '../service data/serviceEvent';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceEventsService {

  private serviceEventsUrl = 'http://localhost:5000/api/serviceevent';
  //private serviceEventsUrl = 'https://servicehubapi2.azurewebsites.net/api/serviceevent';

  private httpPostAndPutOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getServiceEvents(): Observable<ServiceEvent[]> {
    return this.http.get<ServiceEvent[]>(this.serviceEventsUrl);
  }

  addServiceEvent(serviceEvent: ServiceEvent) : Observable<ServiceEvent> {
    return this.http.post<ServiceEvent>(this.serviceEventsUrl, serviceEvent, this.httpPostAndPutOptions);
  }

  updateServiceEvent(serviceEvent: ServiceEvent) : Observable<ServiceEvent> {

    let urlForPut: string = `${this.serviceEventsUrl}\\${serviceEvent.id}`
    return this.http.put<ServiceEvent>(urlForPut, serviceEvent, this.httpPostAndPutOptions);
  }

}
